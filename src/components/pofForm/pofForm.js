import { Button, Radio, Form, notification, message } from "antd";
import { useState } from "react";

export default function PofForm() {
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

  const half = [
    {
      label: "More than 1.5",
      value: 2,
    },
    {
      label: "Equal to 1.5",
      value: 1.5,
    },
    {
      label: "less than 1.5",
      value: 1,
    },
  ];

  const ten = [
    {
      label: "More than 10",
      value: 20,
    },
    {
      label: "Equal to 10",
      value: 10,
    },
    {
      label: "Less than 10",
      value: 5,
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

  const transferred_embryos = [
    {
      label: "Fresh",
      value: "Fresh",
    },
    {
      label: "Frozen",
      value: "Frozen",
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
    console.log(val);
    //1
    if (
      val.Progesterone < 1.5 &&
      val.MII_oocytes <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.COC <= 10 &&
      val.PN2_oocytes <= 10 &&
      val.transferred_embryos === "Fresh"
    )
      result = 0.53 * 100;

    //2
    if (
      val.MII_oocytes <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.COC <= 10 &&
      val.PN2_oocytes <= 10 &&
      val.transferred_embryos === "Fresh" &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.52 * 100;

    //3
    if (
      val.MII_oocytes <= 10 &&
      !Female_Surgical_History &&
      val.Stimulation_protocol === "Antagonist" &&
      val.COC <= 10 &&
      val.PN2_oocytes <= 10 &&
      val.transferred_embryos === "Fresh" &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.52 * 100;

    //4
    if (
      val.MII_oocytes <= 10 &&
      !Female_Surgical_History &&
      val.COC <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.PN2_oocytes <= 10 &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.51 * 100;

    //5
    if (
      val.MII_oocytes <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.PN2_oocytes <= 10 &&
      val.transferred_embryos === "Fresh" &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.51 * 100;

    //6
    if (
      val.MII_oocytes <= 10 &&
      val.Fertilization_method === "ICSI" &&
      val.COC <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.PN2_oocytes <= 10 &&
      val.embryos_transferred > 1
    )
      result = 0.5 * 100;

    //7
    if (
      val.MII_oocytes <= 10 &&
      val.Fertilization_method === "ICSI" &&
      val.Stimulation_protocol === "Antagonist" &&
      val.COC <= 10 &&
      val.PN2_oocytes <= 10 &&
      val.transferred_embryos === "Fresh" &&
      val.embryos_transferred > 1
    )
      result = 0.5 * 100;

    //8
    if (
      val.MII_oocytes <= 10 &&
      val.COC <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.Fertilization_method === "ICSI" &&
      val.transferred_embryos === "Fresh"
    )
      result = 0.5 * 100;

    //9
    if (
      val.COC <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.transferred_embryos === "Fresh" &&
      val.PN2_oocytes <= 10 &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.5 * 100;

    //10
    if (
      val.MII_oocytes <= 10 &&
      val.COC <= 10 &&
      val.Stimulation_protocol === "Antagonist" &&
      val.PN2_oocytes <= 10 &&
      val.Fertilization_method === "ICSI" &&
      val.transferred_embryos === "Fresh"
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
          label="Progesterone Level on Day of hCG Injection (ng/ml)"
          name="Progesterone"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={half} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="Type of transferred embryos"
          name="transferred_embryos"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={transferred_embryos}
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
          label="No. of oocyte retrieved (COC)"
          name="COC"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={ten} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="No. of 2PN oocytes"
          name="PN2_oocytes"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={ten} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="Number of MII oocytes"
          name="MII_oocytes"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={ten} optionType="button" buttonStyle="solid" />
        </Form.Item>

        <Form.Item
          label="No. of embryos transferred"
          name="embryos_transferred"
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
          name="Fertilization_method"
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
          <Button block htmlType="reset">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
