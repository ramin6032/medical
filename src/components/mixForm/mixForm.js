import { Button, Radio, Form, notification, message } from "antd";
import { useState } from "react";

export default function MixForm() {
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

  const towenty = [
    {
      label: "More than 20",
      value: 30,
    },
    {
      label: "Equal to 20",
      value: 20,
    },
    {
      label: "Less than 20",
      value: 10,
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
    console.log(val);
    let result;

    //1
    if (
      !val.Varicocelectomy &&
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      val.Stimulation === "Antagonist" &&
      !val.Female_Surgical_History &&
      !val.Thyroid_disorder
    )
      result = 0.745689655;

    //2
    if (
      val.AMH >= 1 &&
      val.Fertilization === "ICSI" &&
      !val.Living_Child &&
      !val.Dead_child &&
      val.Stimulation === "Antagonist" &&
      !val.Female_Surgical_History &&
      !val.Thyroid_disorder
    )
      result = 0.715517241;

    //3
    if (
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      val.Stimulation === "Antagonist" &&
      !val.Female_Surgical_History &&
      !val.Thyroid_disorder
    )
      result = 0.711206897;

    //4
    if (
      val.Non_progressive_motility >= 1 &&
      val.spermatozoa >= 20 &&
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      val.Stimulation === "Antagonist" &&
      !val.Female_Surgical_History &&
      !val.Thyroid_disorder
    )
      result = 0.711206897;

    //5
    if (
      val.embryos > 1 &&
      val.Fertilization === "ICSI" &&
      !val.Male_Addiction &&
      !val.Living_Child &&
      !val.Dead_child &&
      val.Stimulation === "Antagonist" &&
      !val.Thyroid_disorder
    )
      result = 0.706896552;

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
          label="Thyroid disorder"
          name="val.Thyroid_disorder"
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
          label="Male addiction"
          name="Male_addiction"
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
          label="Anti-müllerian hormone (AMH) level (ng/ml)"
          name="AMH"
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
          label="Non-progressive motility (NP, %)"
          name="Non_progressive_motility"
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
            options={towenty}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Stimulation protocol"
          name="Stimulation_protocol"
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
