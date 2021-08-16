export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "暱稱尚未輸入"
    }

    // Email
    if(!values.email) {
        errors.email = "E-mail 未填入"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "E-mail格式不正確"
    }

    if (!values.password) {
        errors.password = "密碼尚未輸入"
    } else if (values.password.length < 6) {
        errors.password = "密碼長度至少6字元以上"
    }

    if (!values.password2) {
        errors.password2 = "密碼尚未輸入"
    } else if(values.password2 !== values.password) {
        errors.password2 = "與密碼不符合"
    }

    return errors
}