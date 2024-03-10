import { Button, Radio, Form, notification, message } from "antd";
import { useState } from "react";

export default function FemaileForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [notif, notifHolder] = notification.useNotification();

  const [msg, messagetHolder] = message.useMessage();

  const option = [
    {
      label: "Yes",
      value: 1,
    },
    {
      label: "No",
      value: 0,
    },
  ];
  const StimulationProtocolOptions = [
    {
      label: "Agonist",
      value: "Agonist",
    },
    {
      label: "Antagonist",
      value: "Antagonist",
    },
    {
      label: "Microdose",
      value: "Microdose",
    },
  ];
  const maturityOptions = [
    {
      label: "0-20",
      value: 10,
    },
    {
      label: "21-40",
      value: 30,
    },
    {
      label: "41-60",
      value: 50,
    },
    {
      label: "61-80",
      value: 70,
    },
    {
      label: "81-100",
      value: 90,
    },
  ];
  const FertilizationOptions = [
    {
      label: "IVF",
      value: "IVF",
    },
    {
      label: "ICSI",
      value: "ICSI",
    },
    {
      label: "Split",
      value: "Split",
    },
  ];

  const AntiMullerianOptions = [
    {
      label: "More than 1",
      value: 2,
    },
    {
      label: "Equal to 1",
      value: 1,
    },
    {
      label: "Less than 1",
      value: 0,
    },
  ];

  const embryosOptions = [
    {
      label: "More than 1",
      value: 2,
    },
    {
      label: "Equal to 1",
      value: 1,
    },
  ];

  const Of2PNOptions = [
    {
      label: "More than 10",
      value: 12,
    },
    {
      label: "Equal to 10",
      value: 10,
    },
    {
      label: "Less than 10",
      value: 0,
    },
  ];

  const ProgesteroneLevel = [
    {
      label: "More than 1.5",
      value: 2,
    },
    {
      label: "Equal to 1.5",
      value: 1.5,
    },
    {
      label: "Less than 1.5",
      value: 0,
    },
  ];

  const process = (val) => {
    let result;

    //1
    if (
      val.trans_emb === 2 &&
      val.AMH >= 1 &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.63 * 100;

    //2
    if (
      val.trans_emb === 2 &&
      val.AMH >= 1 &&
      val.oocyte_maturity >= 81 &&
      val.oocyte_maturity < 100 &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.53 * 100;

    //3
    if (
      val.trans_emb === 2 &&
      val.Progesterone < 1.5 &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.52 * 100;

    //4
    if (
      val.trans_emb === 2 &&
      val.AMH >= 1 &&
      !val.Thyroid_disorder &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.52 * 100;

    //5
    if (
      val.Progesterone < 1.5 &&
      val.AMH >= 1 &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion &&
      val.trans_emb === 2
    )
      result = 0.51 * 100;

    //6
    if (
      val.trans_emb === 2 &&
      val.AMH >= 1 &&
      !val.Thyroid_disorder &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.51 * 100;

    //7
    if (
      val.trans_emb === 2 &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      val.of2PN <= 10 &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.5 * 100;

    //8
    if (
      val.trans_emb === 2 &&
      val.oocyte_maturity >= 81 &&
      val.oocyte_maturity < 100 &&
      !val.Female_Surgical_History &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.5 * 100;

    //9
    if (
      val.trans_emb === 2 &&
      val.oocyte_maturity >= 81 &&
      val.oocyte_maturity < 100 &&
      val.AMH >= 1 &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion
    )
      result = 0.5 * 100;

    //10
    if (
      val.Fertilization === "ICSI" &&
      val.mii <= 10 &&
      val.Stimulation === "Antagonist" &&
      !val.Dead_child &&
      !val.Living_Child &&
      !val.Abortion &&
      val.of2PN <= 10 &&
      val.trans_emb === 2
    )
      result = 0.5 * 100;

    if (result)
      notif.open({
        message: `Liveـbirth prediction: YES`,
        description: `This prediction is based on ${result}% of available dataset`,
        placement: "top",
        duration: 0,
        type: "success",
      });
    else
      notif.open({
        message: `Liveـbirth prediction: NO`,
        placement: "top",
        duration: 0,
        type: "error",
      });
  };

  const onFinish = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      process(value);
    }, 300);
  };
  const onFinishFailed = () => {
    msg.error("Please fill required fields");
  };

  return (
    <div className=" p-lg-5 p-3 rounded shadow-sm bg-white">
      {notifHolder}
      {messagetHolder}
      <h6 className="pb-3">
        Dear operator, please fill out the electronic form and then tap on the
        prediction button.
      </h6>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Previous surgeries related to female reproductive system"
          name="Female_Surgical_History"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={option}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Dead Child"
          name="Dead_Child"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={option}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Living Child"
          name="Living_Child"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={option}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Abortion"
          name="Abortion"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={option}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Thyroid disorder"
          name="Thyroid_disorder"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={option}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Anti-mullerian hormon (AMH) level (ng/ml)"
          name="AMH"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={AntiMullerianOptions}
            optionType="button"
            buttonStyle="solid"
            style={{ flexWrap: "nowrap" }}
          />
        </Form.Item>

        <Form.Item
          label="Progesterone Level on Day of hCG Injection (ng/ml)"
          name="Progesterone"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={ProgesteroneLevel}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Stimulation protocol"
          name="Stimulation"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={StimulationProtocolOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="No. of2PN oocytes"
          name="of2PN"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={Of2PNOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Number of MII oocytes"
          name="mii"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={Of2PNOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="No. of embryos transferred"
          name="trans_emb"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={embryosOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Oocyte maturity (M-Index %)"
          name="oocyte_maturity"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={maturityOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Fertilization method"
          name="Fertilization"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={FertilizationOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <div className="d-flex pt-5 gap-3">
          <Button block htmlType="submit" type="primary" loading={isLoading}>
            Prediction
          </Button>
          <Button block htmlType="reset">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
