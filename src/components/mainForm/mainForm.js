import { Button } from "antd";

export default function MainForm({ setSection }) {
  return (
    <div
      className=" p-5 rounded shadow-sm"
      style={{ background: "rgba(255, 255, 255, 0.5)" }}
    >
      <h6>Dear operator please choose the cause of infertility:</h6>
      <div className="d-flex gap-2 flex-column pt-3">
        <Button size="large" block onClick={() => setSection("femaleForm")}>
          Female factor other than PCOS and POF
        </Button>
        <Button size="large" block>
          Polycystic ovary syndrome (PCOS)
        </Button>
        <Button size="large" block>
          Premature ovarian failure (POF){" "}
        </Button>
        <Button size="large" block>
          Male factor{" "}
        </Button>
        <Button size="large" block>
          Mix{" "}
        </Button>
        <Button size="large" block>
          Unknown{" "}
        </Button>
      </div>
    </div>
  );
}
