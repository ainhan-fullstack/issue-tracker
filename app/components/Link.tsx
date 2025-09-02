import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const CustomLink = ({ href, children }: Props) => {
  return <RadixLink href={href}>{children}</RadixLink>;
};

export default CustomLink;
