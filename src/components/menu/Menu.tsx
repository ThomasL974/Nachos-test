import styled from "styled-components"
import logo from "../../assets/images/logo.png";
import { menu } from "./menu.data";
import { MenuItems } from "./menu.model";
import _ from "lodash";
import { BiSearch } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";

export const Menu = () => {
    const Menu = styled.menu`
        width: 100%;
        padding: 2rem 5rem 0 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const Logo = styled.div`
        width: 800px;
        height: 100px;
        display: flex;
        justify-content: start;
        align-items: center;

        img{
            height: 100px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    `;
    const MenuGroup = styled.ul`
        height: 100px;
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
            cursor: pointer;
            font-family: "Bold", sans-serif;
            font-size: 1rem;
        }
    `
    const Search = styled.div`
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;

        div{
            width: 300px;
            border-radius: 50px;
            height: auto;
            background-color: black;
            display: flex;
            justify-content: start;
            padding: 1rem;
            gap: 1rem;
            align-items: center;
            position: relative;

            &::before{
                content: '';
                width: 1px;
                height: 31px;
                background-color: white;
                position: absolute;
                right: 40px;
            }

            svg{
                fill: white;
                transform: scale(1.5);
                position: relative;
            }

            input{
                background-color: black;
                border: none;
                color: white;
                width: 100%;
                position: relative;
            }

            input:focus{
                outline: none;
            }

            input::placeholder{
                color: white;
            }
        }
    `;

    const menuItems: MenuItems[] = menu;
    return (
        <Menu>
            <Logo>
                <img src={logo} alt="Logo image" />
            </Logo>
            <MenuGroup>
                {_.map(menuItems, (item: MenuItems) => <li>{item.name?.toUpperCase()}</li>)}
            </MenuGroup>
            <Search>
                <div>
                    <BiSearch />
                    <input type="text" placeholder="Search" />
                    <FaShoppingBasket />
                </div>
            </Search>
        </Menu>
    )
}
