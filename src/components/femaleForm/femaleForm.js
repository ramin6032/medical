import { Button, Radio, Form, Input } from "antd";

export default function FemaileForm() {
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
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <div
      className=" p-5 rounded shadow-sm"
      style={{ background: "rgba(255, 255, 255, 0.5)" }}
    >
      <h6>
        Dear operator, please fill out the electronic form and then tap on the
        prediction button
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
        <div className="d-flex pt-5 gap-3">
          <Button block htmlType="submit" type="primary">
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
