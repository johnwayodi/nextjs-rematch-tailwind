import { FC } from "react";
import { Row } from "antd";
import Link from "next/link";

interface Props { }

const Footer: FC<Props> = (props) => {
  return (
    <Row className="w-full bg-teal-950 h-16">
      <Link href="https://github.com/johnwayodi/nextjs-rematch-tailwind" target="blank" className="mx-auto mt-4">
        <p className="text-white">View on GitHub</p>
      </Link>
    </Row>
  );
};

export default Footer;
