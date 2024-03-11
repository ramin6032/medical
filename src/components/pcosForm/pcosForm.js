import { Button, Radio, Form, Modal, message } from "antd";
import { useState } from "react";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

export default function PcosForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [result, setResult] = useState("");
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
      val.AMH >= 1 &&
      !val.Thyroid_disorder &&
      val.Stimulation === "Antagonist" &&
      val.embryos > 1
    )
      result = 0.58 * 100;

    //2
    if (
      val.AMH >= 1 &&
      val.embryos > 1 &&
      val.Stimulation === "Antagonist" &&
      val.Fertilization === "ICSI" &&
      !val.Thyroid_disorder
    )
      result = 0.58 * 100;

    //3
    if (
      PN2_oocytes <= 10 &&
      val.Fertilization === "ICSI" &&
      val.Stimulation === "Antagonist" &&
      !val.Thyroid_disorder
    )
      result = 0.57 * 100;

    //4
    if (
      val.AMH >= 1 &&
      val.Fertilization === "ICSI" &&
      val.Stimulation === "Antagonist" &&
      !val.Thyroid_disorder
    )
      result = 0.57 * 100;

    //5
    if (0) result = 0.56 * 100;

    //6
    if (
      val.AMH >= 1 &&
      val.embryos > 1 &&
      val.AFC > 18 &&
      val.Fertilization === "ICSI" &&
      val.Stimulation === "Antagonist" &&
      !val.Thyroid_disorder
    )
      result = 0.53 * 100;

    //7
    if (
      val.AMH >= 1 &&
      PN2_oocytes <= 10 &&
      val.Fertilization === "ICSI" &&
      val.Stimulation === "Antagonist" &&
      val.embryos > 1 &&
      !val.Thyroid_disorder
    )
      result = 0.53 * 100;

    //8
    if (
      val.Anti_thyroi_peroxidase < 60 &&
      val.AMH >= 1 &&
      val.Stimulation === "Antagonist" &&
      !val.Thyroid_disorder
    )
      result = 0.52 * 100;

    //9
    if (
      val.Anti_thyroi_peroxidase < 60 &&
      val.AMH >= 1 &&
      val.Stimulation === "Antagonist" &&
      val.embryos > 1 &&
      !val.Thyroid_disorder
    )
      result = 0.52 * 100;

    //10
    if (
      val.Anti_thyroi_peroxidase < 60 &&
      val.AMH >= 1 &&
      val.Stimulation === "Antagonist" &&
      val.Fertilization === "ICSI" &&
      !val.Thyroid_disorder
    )
      result = 0.51 * 100;

    if (result) {
      setResult(result);
      setSuccessModal(true);
    } else setErrorModalOpen(true);
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
    <>
      <p className="fw-medium fs-4 text-primary-emphasis text-center px-3">
        Liveـbirth prediction expert system
        <p className="fs-6 text-black text-center">
          Polycystic ovary syndrome (PCOS)
        </p>
      </p>
      <div className=" p-lg-5 p-3 rounded shadow-sm bg-white">
        {messagetHolder}
        <h6 className="pb-3 text-primary-emphasis">
          Dear operator, please fill out the electronic form and then tap on the
          prediction button.
        </h6>
        <Form
          style={{ minWidth: 330 }}
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
            <Radio.Group
              options={one}
              optionType="button"
              buttonStyle="solid"
            />
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
            <Radio.Group
              options={afc}
              optionType="button"
              buttonStyle="solid"
            />
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
            label="No. of 2PN oocytes"
            name="PN2_oocytes"
            rules={[
              {
                required: true,
                message: "required",
              },
            ]}
          >
            <Radio.Group
              options={ten}
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
            <Button block htmlType="reset">
              Reset
            </Button>
          </div>
        </Form>
        <Modal
          title="Prediction"
          open={errorModalOpen}
          footer={false}
          onCancel={() => setErrorModalOpen(false)}
        >
          <div class="alert alert-danger fs-5" role="alert">
            <CloseCircleFilled style={{ fontSize: "24px" }} /> Liveـbirth
            prediction: <strong>NO</strong>
          </div>
        </Modal>
        <Modal
          title="Prediction"
          open={successModal}
          footer={false}
          onCancel={() => setSuccessModal(false)}
        >
          <div class="alert alert-success fs-5 " role="alert">
            <CheckCircleFilled style={{ fontSize: "24px" }} /> Liveـbirth
            prediction: <strong>YES</strong>
            <p className="fs-6 fw-normal pt-2">
              This prediction is based on <b>{result}%</b> of available dataset
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
}
