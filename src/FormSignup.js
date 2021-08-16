import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'

const FormSignup = ({submitForm}) => {
    const { handleSubmit, handleChange, values, errors } = useForm(submitForm, validate)

    return (
        <div>
            <div className="form-content-right"></div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>帳號註冊</h1>
                <div class="form-inputs">
                    <label htmlFor="username" className="form-label">暱稱</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="設定您的暱稱..."
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div class="form-inputs">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="輸入您的E-mail..."
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div class="form-inputs">
                    <label htmlFor="password" className="form-label">密碼</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="設定您的密碼..."
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div class="form-inputs">
                    <label htmlFor="password2" className="form-label">密碼確認</label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="請輸入第二次密碼..."
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">送出</button>
                <span className="form-input-login">
                    已經有帳戶了嗎?
                    <a href="#">由此登入</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
