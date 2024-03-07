import { LoadingOutlined } from "@ant-design/icons";

export default function Intro() {
  return (
    <>
      <p className="py-4 fw-bold text-info-emphasis fs-5 text-primary-emphasis">
        In the name of God
      </p>
      <p className="fw-medium fs-4 text-primary-emphasis">
        Liveـbirth prediction expert system
      </p>
      <p className="text-dark-emphasis">
        Software Design and Development by Health Information Management
        Research Center, Kashan University of Medical Sciences, Kashan, Iran
      </p>
      <p className="text-dark-emphasis">
        Based on the results of Ph.D. dissertation in the field of Health
        Information Management
      </p>
      <p className="pt-3">
        <LoadingOutlined /> Please wait...
      </p>
    </>
  );
}
