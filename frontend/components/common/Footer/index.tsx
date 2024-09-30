import { SocialCards } from "components/modules/SocialCards";
import { LinkRef } from "components/modules/LinkRef";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 dark:border-gray-800 py-12 text-center md:flex md:justify-between">
        <p className="text-base text-gray-400">
          &copy; 2024 Diamond Paws Inc. All rights reserved.
        </p>
        <p className="text-base text-gray-400 gap-x-4 flex">
          <LinkRef
            href={"/legal/privacy.pdf"}
            className="hover:underline"
            openNewTab={true}
          >
            Privacy Policy
          </LinkRef>
          <LinkRef
            href={"/legal/terms.pdf"}
            className="hover:underline"
            openNewTab={true}
          >
            Terms
          </LinkRef>
        </p>
        <div className="mt-6 flex justify-center space-x-8 md:mt-0">
          <SocialCards />
        </div>
      </div>
    </footer>
  );
}
