import { useQueryState } from "next-usequerystate";
import React, { ReactElement } from "react";
import { useIntl } from "react-intl";
import { useDebounce } from "react-use";

import { Layout, ProductCollection } from "@/components";
import { messages } from "@/components/translations";
import { ProductFilterInput } from "@/saleor/api";

function SearchPage() {
  const t = useIntl();
  const [searchQuery, setSearchQuery] = useQueryState("q");
  const [debouncedFilter, setDebouncedFilter] = React.useState<ProductFilterInput>({});


  return (
    <main className="container w-full px-8 mt-5">
      <p className="font-semibold text-xl mb-5">hello</p>
    </main>
  );
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
