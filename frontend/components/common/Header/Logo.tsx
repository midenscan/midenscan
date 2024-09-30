import { LinkRef } from "components/modules/LinkRef";

export function Logo() {
  return (
    <div className="flex items-center gap-x-1">
      <img alt="eater-egg" src={"/img/miden.ico"} className="h-12" />{" "}
      <LinkRef href="/" className="text-3xl text-primary dark:text-darkPrimary">
        MIDEN<span className="font-medium">SCAN</span>
      </LinkRef>
    </div>
  );
}
