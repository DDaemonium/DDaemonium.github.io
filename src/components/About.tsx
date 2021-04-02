import { Avatar, Card, CardGrid, Div, Gradient, Group, Header, Title, Text } from '@vkontakte/vkui';
import * as React from 'react';

export default class About extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        window.history.pushState("", "Partner Shop - контактная информация", '/about');
        document.querySelector("link[rel='canonical']")?.setAttribute("href", window.location.protocol + "//" + window.location.host + "/about");
        document.title = "Partner Shop - контактная информация";
        document.querySelector('meta[name="description"]')?.setAttribute("content", "Partner Shop - крупный партнёрский магазин. У нас свыше 100 000 000 товаров в базе, ОГРОМНОЕ количество патнёров и категорий, выгодный кешбек и возмоность получить КОСМИЧЕСКИЕ скидки. Мы уверены, что Вы найдёте то, что Вам нужно больше всего у нас :). Наша цель - сделать удобный поисковик товаров, без лишнего. Максимум удобства и комфорта - залог успеха!");
    }

    render() {
        return (
            <Group>
                <Gradient style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 32,
                }}>
                    <Avatar src="/avatar.png" size={96} />
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Partner Shop</Title>
                </Gradient>
                <Group mode="plain">
                    <CardGrid size='l'>
                        <Card mode="shadow">
                            <Header mode="secondary">О нас</Header>
                            <Div>
                                <Text weight="regular" >
                                    Partner Shop - крупный партнёрский магазин. У нас свыше 100 000 000 товаров в базе, ОГРОМНОЕ количество патнёров и категорий, выгодный кешбек и возмоность получить КОСМИЧЕСКИЕ скидки. Мы уверены, что Вы найдёте то, что Вам нужно больше всего у нас :). Наша цель - сделать удобный поисковик товаров, без лишнего. Максимум удобства и комфорта - залог успеха!
                                </Text>
                                <Text weight="regular" >
                                    Не забудь подписаться на наш <a href="https://vk.com/vkcombestshop">паблик в ВК</a>, там мы публикуем все обновления нашего сайта.
                                        <br />
                                        Есть предложения или вопросы? Пиши нам сообщения в группу ВК или на нашу почту <a href="mailto:jj0hn8lack@yandex.ru"> jj0hn8lack@yandex.ru</a>!
                                </Text>
                                <Text weight="regular" >

                                </Text>
                            </Div>
                        </Card>
                    </CardGrid>
                    <CardGrid size='l'>
                        <Card mode="shadow">
                            <Header mode="secondary">Cookies</Header>
                            <Div>
                                <Text weight="regular" >
                                    Мы используем cookie для улучшения качества нашего сервиса, а именно плагины <a href="https://www.google.ru/intl/ru/policies/privacy/">Google Analytics</a> <a href="https://yandex.ru/legal/confidential/">Яндекс.Метрика</a>.
                    Используя наш сервис - Вы разрешаете нам использовать cookie для улучшения качеста сервиса.
                                </Text>
                            </Div>
                        </Card>
                    </CardGrid>
                    <CardGrid size='l'>
                        <Card mode="shadow">
                            <Header mode="secondary">Что такое CashBack?</Header>
                            <Div>
                                <Text weight="regular" >
                                    Это безумно приятный бонус, почти как скидка, только круче! Покупая ТОЛЬКО ЧЕРЕЗ НАШ СЕРВИС, вам врнётся часть стоимости товара на карту или телефон. Подробнее про сумму возврата смотрите у конкретного товара. Возврат средств осуществляется только после подтверждения оплаты товара и его доставки.
                                </Text>
                            </Div>
                        </Card>
                    </CardGrid>
                    <CardGrid size='l'>
                        <Card mode="shadow">
                            <Header mode="secondary">Мы продаём товары?</Header>
                            <Div>
                                <Text weight="regular" >
                                    Нет, мы не продаём товары, мы лишь перенаправляем вас для покупки товаров на официальных сайтах партнёров. Вам удобнее искать товары среди можества ПРОВЕРЕННЫХ магазинов-партнёров, а ещё и возможность получить возврат части стоимости товара. Удобно, правда?
                                </Text>
                            </Div>
                        </Card>
                    </CardGrid>
                </Group>
            </Group>
        );
    }
}