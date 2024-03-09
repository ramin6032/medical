import { Button, Radio, Form, notification, message } from "antd";
import { useState } from "react";

export default function MaleForm() {
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

  const infertility = [
    {
      label: "Primary",
      value: "Primary",
    },
    {
      label: "Secondary",
      value: "Secondary",
    },
  ];

  const one = [
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

  const toweny = [
    {
      label: "More than 20",
      value: 10,
    },
    {
      label: "Equal to 20",
      value: 20,
    },
    {
      label: "Less than 20",
      value: 30,
    },
  ];

  const four = [
    {
      label: "More than 4",
      value: 5,
    },
    {
      label: "Equal to 4",
      value: 4,
    },
    {
      label: "Less than 4",
      value: 3,
    },
  ];

  const justOne = [
    {
      label: "More than 1",
      value: 2,
    },
    {
      label: "Equal to 1",
      value: 1,
    },
  ];

  const simulation = [
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

  const Fertilization = [
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

  const process = (val) => {
    let result;

    //1
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.infertility === "Primary" &&
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.755;

    //2
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.infertility === "Primary" &&
      !val.Varicocelectomy &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.745;

    //3
    if (
      val.motility >= 1 &&
      val.infertility === "Primary" &&
      val.Fertilization === "ICSI" &&
      !val.Varicocelectomy &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.735;

    //4
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.infertility === "Primary" &&
      val.Fertilization === "ICSI" &&
      !val.Varicocelectomy &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.73;

    //5
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.Normal_forms < 4 &&
      val.infertility === "Primary" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.73;

    //6
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.infertility === "Primary" &&
      val.Fertilization === "ICSI" &&
      !val.Varicocelectomy &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.72;

    //7
    if (
      val.motility >= 1 &&
      val.embryos > 1 &&
      val.spermatozoa >= 20 &&
      val.infertility === "Primary" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.715;

    //8
    if (
      val.motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.Normal_forms < 4 &&
      val.infertility === "Primary" &&
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      !val.Abortion &&
      val.Stimulation === "Antagonist"
    )
      result = 0.71;

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
          label="Type of infertility"
          name="infertility"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={infertility}
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
          label="Male Addiction"
          name="Male_Addiction"
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
          label="Varicocelectomy"
          name="Varicocelectomy"
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
          label="Non-progressive motility (NP, %)"
          name="motility"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={one} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="Immotile spermatozoa (IM, %)"
          name="spermatozoa"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={toweny}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Normal forms (%)"
          name="Normal_forms"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={four} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="No. of embryos transferred"
          name="embryos"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={justOne}
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
            options={simulation}
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
            options={Fertilization}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <div className="d-flex pt-5 gap-3">
          <Button block htmlType="submit" type="primary" loading={isLoading}>
            Prediction
          </Button>
          <Button block htmlType="reset" onClick={() => setIsDisabled(false)}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
