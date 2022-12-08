import React from "react";
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
        </div>
    )
}

export default Header;