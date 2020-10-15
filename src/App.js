import React from 'react';
import Cat from './components/Cat';
import Doggo from "./components/Doggo";
import Octopus from "./components/Octopus";
import Inline from "./components/Inline";
import Birdie from "./components/Birdie";


class App extends React.Component {

    render() {
        return <div className="app">
            <div className="wrapper">
                <h3>Стилизуем компоненты</h3>

                <p>Этот компонент стилизован с помощью статичных стилей в public/styles</p>
                <Octopus/>

                <p>Этот компонент стилизован с помощью стилей, лежащих рядом с компонентом</p>
                <Cat/>

                <p>Этот стилизован с помощью модульных стилей</p>
                <Doggo/>

                <p>Этот с помощью inline стилей</p>
                <Inline text="Некий произвольный текст"/>

                <p>Использование SASS</p>
                <Birdie/>
            </div>
        </div>
    }

}

export default App;
