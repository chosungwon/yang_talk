import React, {Component, Fragment} from "react";
import './Login.scss';
import axios from 'axios';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            userPw: '',
            success: null,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            userId: this.state.userId,
            userPw: this.state.userPw
        };

        axios.post('http://13.125.186.175/users/login',  user )
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                this.setState({
                    success: res.data.success
                })
            })
    }


    render() {
        let link = null;
        if (this.state.success === false) {
            alert('로그인에 실패하셨습니다.')
            window.history.go(0)

        }

        if (this.state.success === true) {
            alert('로그인에 성공하셨습니다.')
            link = <a href={'/chat'}><button>채팅 하러가기</button></a>
        }


        return (
            <Fragment>
                <div className={'Header'}>
                    <a href={'/'}>
                        <h2>Yang Talk</h2>
                    </a>
                </div>
                <div className='Container'>
                    <div className='Register'>
                        <form>
                            <input className={'input_cl'} type={'text'} name={'userId'} id={'userId'} placeholder={'아이디'} onChange={this.handleChange}/>
                            <input className={'input_cl'} type={'password'} name={'userPw'} id={'userPw'} placeholder={'비밀번호'} onChange={this.handleChange}/>
                            <button className={'input_su'} type={'submit'} name={'submit'} id={'submit'} value={'로그인하기'} onClick={this.handleSubmit}>
                                로그인하기
                            </button>
                        </form>
                        {link}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Login;
