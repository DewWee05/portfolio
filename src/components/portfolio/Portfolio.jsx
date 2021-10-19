import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
    // featuredPortfolio,
     webPortfolio,
     mobilePortfolio,
    // designPortfolio,
    // contentPortfolio,

} from "../../data";



export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [

        {
            id: "web",
            title: "8-bit Armageddon",
        },
        {
            id: "mobile",
            title: "Chather",
        },


    ];

    useEffect(() => {
        switch (selected) {

            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;

                default: 
                setData(webPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Past Projects</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />               
                    <h3> {d.title}</h3>
                </div>
            ))}
            
            </div>
        </div>
    )
}