import React from "react";
import { Breadcrumbs } from "../../../Components/Atom";
import mdx from './Breadcrumbs.mdx'

export default {
  title: "Molecules/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ShortBreadcrumbs = () => {
  return (
    <Breadcrumbs
      pages={[
        { name: "Promo", link: "/" },
        { name: "Produk", link: "/" },
        { name: "Pria", link: "/" },
      ]}
    />
  );
};

export const ShortBreadcrumbsLongText = () => {
  return (
    <Breadcrumbs
      pages={[
        { name: "Promo", link: "/" },
        { name: "Produk Bulan November 2011", link: "/" },
        { name: "Makanan dan Minuman", link: "/" },
      ]}
    />
  );
};

export const LongBreadcrumbs = () => {
  return (
    <Breadcrumbs
      pages={[
        { name: "Promo", link: "/" },
        { name: "Produk Bulan November 2011", link: "/" },
        { name: "Makanan dan Minuman Ringan", link: "/" },
        { name: "Makanan Ringan", link: "/" },
        { name: "Nama Produk Makanan Ringan Pilihan", link: "/" },
        { name: "Pilih Pengiriman", link: "/" },
        { name: "Pembayaran", link: "/" },
      ]}
    />
  );
};