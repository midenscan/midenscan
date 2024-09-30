import { FourOhFourPage } from "components/common/FourOhFourPage";

const PAGE_NOT_FOUND_HEADER = (
  <>
    <p className="text-base font-semibold text-primary dark:text-darkPrimary">
      404
    </p>
    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
      This page does not exist.
    </h1>
    <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
      The page you are looking for could not be found.
    </p>
  </>
);
function FourOhFour() {
  return <FourOhFourPage headerComponent={PAGE_NOT_FOUND_HEADER} />;
}

export default FourOhFour;
