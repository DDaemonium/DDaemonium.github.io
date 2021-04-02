import { Icon16Search, Icon16ShoppingCartOutline, Icon28ShoppingCartOutline } from '@vkontakte/icons';
import { Button, Card, CardGrid, Div, Group, Header, Headline, InfoRow, SimpleCell, Text } from '@vkontakte/vkui';
import * as React from 'react';
import { GetProduct, SearchProducts } from '../store/API';

interface IProps {
    isDesktop: boolean,
    openSearch: () => void,
}

export default class ProductPreview extends React.Component<IProps, any>{
    constructor(props: IProps) {
        super(props);

        this.state = {
            name: '',
            article: '',
            imgUrl: '',
            description: '',
            vendor: '',
            partnerName: '',
            referalLink: '',
            price: '',
            charge: '',
            isAvailable: '',
            categoryName: '',
            model: '',
            products: []
        };

        var pathArray = window.location.pathname.split('/');
        if (pathArray.length < 1 || pathArray[1] != "preview") {
            pathArray = [];
        }

        let productId = '7409903';
        if (pathArray.length > 2) {
            productId = pathArray[2];
        }

        let productName = '';
        if (pathArray.length > 3) {
            productName = pathArray[3];
        }

        this.getProduct(productId, productName);
    }

    getProduct(productId, productName) {
        GetProduct(productId, productName)
            .then(x => {
                window.scrollTo(0, 0);
                document.title = "Купить: " + x?.name;
                window.history.pushState("", document.title, "/preview/" + x?.article + "/" + (x?.name ? x?.name.replaceAll(' / ', ' ') : ''));
                document.querySelector("link[rel='canonical']")?.setAttribute("href", window.location.protocol + "//" + window.location.host + "/preview/" + x?.article + "/" + (x?.name ? x?.name.replaceAll(' / ', ' ') : ''));
                document.querySelector('meta[name="description"]')?.setAttribute("content", x?.description ? x?.description : "Магазин не указал описания товара. Перейдите на сайт магазина, нажав на кнопку (Купить), для просмотра описания.");
                this.setState({
                    name: x?.name,
                    article: x?.article,
                    imgUrl: x?.imgUrl,
                    description: x?.description ? x?.description : "Магазин не указал описания товара. Перейдите на сайт магазина, нажав на кнопку (Купить), для просмотра описания.",
                    vendor: x?.vendor,
                    partnerName: x?.partnerName,
                    referalLink: x?.referalLink,
                    price: x?.price,
                    charge: x?.charge,
                    isAvailable: x?.isAvailable,
                    categoryName: x?.categoryName,
                    model: x?.model
                });
                this.search(x?.name.replaceAll(' / ', ' '), 0, x?.categoryId, x?.partnerId);
            });
    }

    goToSimilarURI(q, tid) {
        return window.location.protocol + "//" + window.location.host + "/products/" + (q ? q.replaceAll('/', ' ') : '') + "?p=0&tid=" + (tid ? tid : '') + '&pid=';
    }

    goToProductURI(id, name) {
        return window.location.protocol + "//" + window.location.host + "/preview/" + id + "/" + (name ? name.replaceAll('/', ' ') : '');
    }

    goToProduct(id, name) {
        this.getProduct(id, name);
    }

    getSimilar(q, tid) {
        window.history.pushState("", "", "/products/" + (q ? q.replaceAll('/', ' ') : '') + "?p=0&tid=" + (tid ? tid : '') + '&pid=');
        this.props.openSearch();
    }

    search(q, p, tid, pid) {
        SearchProducts(q, p, tid, pid, 9)
            .then(products => this.setState({
                products: !products ? null : products["products"]?.map((item, index) => (
                    <Card key={index} mode="shadow">
                        <div style={{
                            padding: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <img loading="lazy" style={{ maxWidth: this.props.isDesktop ? 210 : '100%', width: this.props.isDesktop ? 210 : '100%', maxHeight: this.props.isDesktop ? 210 : '100%', height: this.props.isDesktop ? 210 : '100%', objectFit: 'scale-down', position: 'relative' }} src={item["imgUrl"]} alt={item["name"]} />
                        </div>
                        <Div>
                            <Headline weight="regular" style={{ marginBottom: 16 }}>{item["name"]}</Headline>
                            {item["isAvailable"] &&
                                <Text weight="medium" style={{ marginBottom: 16, color: '#28a745!important' }}>{item["price"]}₽</Text>

                            }
                            {item["isAvailable"] && item["charge"] && item["charge"] != "0" &&
                                <Text weight="medium" style={{ marginBottom: 16, color: '#dc3545!important' }}>Вернём: {item["charge"]}₽</Text>
                            }
                            {!item["isAvailable"] &&
                                <Text weight="medium" style={{ marginBottom: 16 }}>Нет в наличии :(</Text>
                            }
                            {item["model"] &&
                                <Text weight="regular">Модель: {item["model"]}</Text>
                            }
                            {item["vendor"] &&
                                <Text weight="regular">Производитель: {item["vendor"]}</Text>
                            }
                        </Div>
                        <Div style={{ display: 'flex' }}>
                            <a style={{ textDecoration: 'none' }}
                                onClick={(e) => e.preventDefault()}
                                href={this.goToProductURI(item["article"], item["name"])}>
                                <Button onClick={_ => this.goToProduct(item["article"], item["name"])} size="m" stretched style={{ marginRight: 8 }}>
                                    Подробнее
                                    </Button>
                            </a>
                            <Button onClick={_ => this.buyProduct(item["referalLink"])} before={<Icon16ShoppingCartOutline />} size="m" stretched mode="commerce">Купить</Button>
                        </Div>
                        <Div>
                            <a style={{ textDecoration: 'none' }}
                                onClick={(e) => e.preventDefault()}
                                href={this.goToSimilarURI(item["name"], item["categoryId"])}>
                                <Button onClick={() => this.getSimilar(item["name"], item["categoryId"])} before={<Icon16Search />} size="m" stretched mode="secondary">
                                    Похожее
                                    </Button>
                            </a>
                        </Div>
                    </Card>
                ))
            }));
    }

    buyProduct(refLink) {
        window.open(refLink, '_blank')?.focus();
    }

    render() {
        return (
            <Group>
                <CardGrid size={this.props.isDesktop ? 'm' : 'l'}>
                    <Card mode="shadow">
                        <Div>
                            <h1>{this.state.name}</h1>
                        </Div>
                        <div style={{ padding: 1 }}>
                            <img style={{ maxWidth: this.props.isDesktop ? '90%' : '100%', width: this.props.isDesktop ? '90%' : '100%', objectFit: 'scale-down', position: 'relative' }} src={this.state.imgUrl} alt={this.state.name} />
                        </div>

                        <Div>
                            <Button onClick={_ => this.buyProduct(this.state.referalLink)} before={<Icon28ShoppingCartOutline />} size="l" stretched mode="commerce">Купить на {this.state.partnerName}</Button>
                        </Div>
                    </Card>
                    <Card mode="shadow">
                        <Header mode="secondary">Информация о товаре</Header>
                        <SimpleCell multiline>
                            <InfoRow header="Цена">
                                {this.state.isAvailable ? this.state.price + "₽" : "Товара нет в наличии"}
                            </InfoRow>
                        </SimpleCell>
                        <SimpleCell multiline>
                            <InfoRow header="CashBack">
                                {this.state.isAvailable ? this.state.charge + "₽" : "Товара нет в наличии"}
                            </InfoRow>
                        </SimpleCell>
                        <SimpleCell multiline>
                            <InfoRow header="Модель">
                                {this.state.model ? this.state.model : "Не указана"}
                            </InfoRow>
                        </SimpleCell>
                        <SimpleCell>
                            <InfoRow header="Производитель">
                                {this.state.vendor ? this.state.vendor : "Не указан"}
                            </InfoRow>
                        </SimpleCell>
                        <SimpleCell>
                            <InfoRow header="Артикул">
                                {this.state.article}
                             </InfoRow>
                        </SimpleCell>
                        <SimpleCell>
                            <InfoRow header="Категория">
                                {this.state.categoryName}
                            </InfoRow>
                        </SimpleCell>
                        <SimpleCell>
                            <InfoRow header="Продавец">
                                {this.state.partnerName}
                            </InfoRow>
                        </SimpleCell>
                    </Card>
                </CardGrid>
                <CardGrid size='l'>
                    <Card mode="shadow">
                        <Header mode="secondary">Описание</Header>
                        <Div>
                            <Text weight="regular" dangerouslySetInnerHTML={{ __html: this.state.description }}>
                            </Text>
                        </Div>
                    </Card>
                </CardGrid>
                <Header mode="primary">Похожие товары магазина {this.state.partnerName}</Header>
                <CardGrid size={this.props.isDesktop ? 's' : 'l'}>
                    {
                        this.state.products
                    }
                </CardGrid>
            </Group>
            );
    }
}