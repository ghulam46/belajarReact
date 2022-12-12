import React from "react";
import Product from "../Class/Product";
import Blog from "./Blog";

const Header = () => {
    return (
        <div>
            <Blog
                tanggal="08 Desember 2022"
                judul="Teknologi Blockchain"
                summary="Lorem Ipsum is simply dummy text."
            />
            <Blog
                tanggal="09 Desember 2022"
                judul="Teknologi Informatika"
                summary="Lorem Ipsum is simply dummy text."
            />
            <Blog
                tanggal="10 Desember 2022"
                judul="Teknologi Ethereum"
                summary="Lorem Ipsum is simply dummy text."
            />
            <Blog
                tanggal="11 Desember 2022"
                judul="Teknologi Web 3"
                summary="Lorem Ipsum is simply dummy text."
            />

            <Product
                nama_produk="Macbook 2020"
                stock="10"
                harga="33000000"
            />
            <Product
                nama_produk="Macbook 2021"
                stock="101"
                harga="330000000"
            />
            <Product
                nama_produk="Macbook 2022"
                stock="105"
                harga="35000000"
            />
            <Product
                nama_produk="Macbook 2023"
                stock="1000"
                harga="39000000"
            />
        </div>
    )
}

export default Header;