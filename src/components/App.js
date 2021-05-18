import React, {Component} from "react"

import {jsonData} from "../data";
import Drinks from "./Drinks";

const getDrinks = () => {
    return jsonData.drinks

}

// Добавить лайк-дизлайк для каждого напитка

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: getDrinks()
        }
    }

    render() {
        return (
            <section className="drinks">
                <Drinks drinks={this.state.drinks} />
            </section>
        )
    }
}