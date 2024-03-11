import { Button, Radio, Form, Modal, message } from "antd";
import { useState } from "react";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

export default function MixForm() {
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
      result = 0.74 * 100;

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
      result = 0.71 * 100;

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
      result = 0.71 * 100;

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
      result = 0.71 * 100;

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
      result = 0.7 * 100;

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
        <p className="fs-6 text-black text-center">Mix</p>
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
            <Radio.Group
              options={one}
              optionType="button"
              buttonStyle="solid"
            />
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
            <Radio.Group
              options={one}
              optionType="button"
              buttonStyle="solid"
            />
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
