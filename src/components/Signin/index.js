import React from 'react';
import { FormInput, FormLabel, FormButton,
         Container, FormWrap, Icon, FormContent,
         Form, FormH1, Text} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Железная дорога</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Войти в аккаунт</FormH1>
                            <FormLabel htmlFor="for">Логин</FormLabel>
                            <FormInput type="login" required />

                            <FormLabel htmlFor="for">Пароль</FormLabel>
                            <FormInput type="password" required />

                            <FormButton type="submit">Продолжить</FormButton>
                            <Text to="/">Забыл пароль</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
