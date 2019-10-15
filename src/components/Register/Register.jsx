import React, {Component, Fragment} from 'react';
import './Register.scss';
import axios from 'axios';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            userPw: '',
            userPw2: '',
            userName: '',
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
            userPw: this.state.userPw,
            userName: this.state.userName
        };

        axios.post('http://13.125.186.175/users',  user )
            .then(res => {
                console.log(res.data);
                this.setState({
                    success: res.data.success
                })
            })
            .catch(error => {
                console.log(error);
            });

        console.log('회원가입 함수')
    }


    render() {
        let link = null;
        if (this.state.success === false) {
            alert('회원가입에 실패하셨습니다.');
            window.history.go(0)

        }

        if (this.state.success === true) {
            link = <a href={'/login'}><button>로그인 하러가기</button></a>
            alert('회원가입에 성공하셨습니다.');
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
                            <input className={'input_cl'} type={'password'} name={'userPw2'} id={'userPw2'} placeholder={'비밀번호 확인'} onChange={this.handleChange}/>
                            <input className={'input_cl'} type={'text'} name={'userName'} id={'userName'} placeholder={'닉네임'} onChange={this.handleChange}/>
                            <button className={'input_su'} type={'submit'} name={'submit'} id={'submit'}  onClick={this.handleSubmit}>
                                가입하기
                            </button>
                        </form>
                        {link}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Register;
