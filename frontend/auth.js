// 初始化当前页面的 Material 组件
const initMaterialComponents = () => {
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach(textField => new mdc.textField.MDCTextField(textField));

    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => new mdc.ripple.MDCRipple(button));
};

// 表单验证
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true; // 如果找不到表单，则跳过验证

    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.parentElement.classList.add('mdc-text-field--invalid');
        } else {
            input.parentElement.classList.remove('mdc-text-field--invalid');
        }
    });

    return isValid;
}

// 登录处理
if (document.getElementById('login')) {
    document.querySelector('#login button').addEventListener('click', async () => {
        if (!validateForm('login')) return;

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) throw new Error('登录失败');
            window.location.href = '/';
        } catch (error) {
            showError('登录失败，请检查用户名和密码');
        }
    });
}

// 注册处理
if (document.getElementById('register')) {
    document.querySelector('#register button').addEventListener('click', async () => {
        if (!validateForm('register')) return;

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            showError('两次输入的密码不一致');
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) throw new Error('注册失败');
            window.location.href = '/';
        } catch (error) {
            showError('注册失败，请稍后重试');
        }
    });
}

// 退出登录处理
if (document.getElementById('logout-button')) {
    document.getElementById('logout-button').addEventListener('click', async () => {
        try {
            const response = await fetch('/api/logout', { method: 'POST' });
            if (!response.ok) throw new Error('退出登录失败');
            window.location.href = '/';
        } catch (error) {
            showError('退出登录失败，请稍后重试');
        }
    });
}
// 显示错误提示
function showError(message) {
    const errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}

initMaterialComponents();