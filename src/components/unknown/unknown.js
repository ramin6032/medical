import { Button, Radio, Form, message, Modal } from "antd";
import { useState } from "react";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

export default function UnknownForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, messagetHolder] = message.useMessage();
  const [successModal, setSuccessModal] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [result, setResult] = useState("");

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
      val.infertility === "Primary" &&
      !val.Thyroid_disorder &&
      !val.Abortion &&
      !val.relationship &&
      !val.Dead_Child &&
      !val.Stimulation_protocol === "Antagonist" &&
      !val.Living_Child &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.94 * 100;

    //2
    if (
      val.infertility === "Primary" &&
      val.embryos_transferred > 1 &&
      !val.Thyroid_disorder &&
      !val.Abortion &&
      !val.relationship &&
      !val.Dead_Child &&
      !val.Living_Child &&
      !val.Stimulation_protocol === "Antagonist" &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.82 * 100;

    //3
    if (
      val.infertility === "Primary" &&
      !val.Thyroid_disorder &&
      !val.Abortion &&
      !val.relationship &&
      !val.Dead_Child &&
      !val.Living_Child &&
      !val.Stimulation_protocol === "Antagonist" &&
      PN2_oocytes <= 10 &&
      val.Fertilization_method === "ICSI"
    )
      result = 0.81 * 100;

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
        <p className="fs-6 text-black text-center">Unknown</p>
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
            label="Kinship relationship of couples"
            name="relationship"
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
