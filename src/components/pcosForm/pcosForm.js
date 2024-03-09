import { Button, Radio, Form, notification, message } from "antd";
import { useState } from "react";

export default function PcosForm() {
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

  const sixty = [
    {
      label: "More than 60",
      value: 70,
    },
    {
      label: "Equal to 60",
      value: 60,
    },
    {
      label: "Less than 60",
      value: 50,
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

  const afc = [
    {
      label: "1-8",
      value: 5,
    },
    {
      label: "9-12",
      value: 10,
    },
    {
      label: "13-17",
      value: 15,
    },
    {
      label: "18 or More than 18",
      value: 20,
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
    console.log(val);
    let result;

    //1
    if (
      val.AMH >= 1 &&
      !val.Thyroid_disorder &&
      val.Stimulation === "Antagonist" &&
      val.embryos > 1
    )
      result = 0.586872587;

    //2
    if (
      val.AMH >= 1 &&
      val.embryos > 1 &&
      val.Stimulation === "Antagonist" &&
      val.Fertilization === "ICSI" &&
      !Thyroid_disorder
    )
      result = 0.583011583;

    //3
    if (1) result = 0.711206897;

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
      !Thyroid_disorder
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
      !Thyroid_disorder
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
          label="Anti-thyroid peroxidase (anti-TPO) level (IU/mL)"
          name="Anti_thyroi_peroxidase"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group
            options={sixty}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item
          label="Antral follicle counts (AFC)"
          name="AFC"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Radio.Group options={afc} optionType="button" buttonStyle="solid" />
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
