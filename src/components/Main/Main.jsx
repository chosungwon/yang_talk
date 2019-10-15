import React, {Component, Fragment} from "react";
import './Main.scss';


class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className={'Header'}>
                    <a href={'/'}>
                        <h2>Yang Talk</h2>
                    </a>
                </div>

            <div className="Container">
                <div className="Register" >
                    <h1>Mobile</h1>
                    <p>준비중 입니다.</p>
                </div>

                <div className="Login" >
                    <h1>Web</h1>
                    <a href={'/register'}><button>회원가입 하러가기</button></a>
                    <a href={'/login'}><button>로그인 하러가기</button></a>
                </div>
            </div>
            </Fragment>
        )
    }
}


export default Main;