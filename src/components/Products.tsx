import { Icon16Search, Icon16ShoppingCartOutline, Icon24Filter } from '@vkontakte/icons';
import { Button, Card, CardGrid, Div, Group, Header, Headline, Search, Text } from '@vkontakte/vkui';
import * as React from 'react';
import { SearchProducts } from '../store/API';

interface IProps {
    isDesktop: boolean,
    openProductView: () => void,
}

export default class Products extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        let params = (new URL(document.location.href)).searchParams;
        let page = 0;
        const strPage = params.get("p");
        if (strPage) {
            page = !isNaN(parseInt(strPage, 10)) ? parseInt(strPage, 10) : 0;
        }
        var pathArray = window.location.pathname.split('/');
        if (pathArray.length < 1 || pathArray[1] != "products") {
            pathArray = [];
        }
        this.state = {
            products: [],
            q: pathArray.length > 2 ? decodeURI(pathArray[2]) : '',
            p: page,
            tid: params.get("tid"),
            pid: params.get("pid"),
            productsFound: ''
        };

        this.onChange = this.onChange.bind(this);
        this.searchEnter = this.searchEnter.bind(this);
        this.goToProduct = this.goToProduct.bind(this);

        this.search(this.state.q, this.state.p, this.state.tid, this.state.pid);
    }

    searchEnter(e) {
        if (e.keyCode === 13) {
            this.search(this.state.q, 0, null, null);
        }
    }

    goToPageURI(p) {
        return window.location.protocol + "//" + window.location.host + "/products/" + (this.state.q ? this.state.q.replaceAll('/', ' ') : '') + "?p=" + p + '&tid=' + (this.state.tid ? this.state.tid : '') + '&pid=' + (this.state.pid ? this.state.pid : '');
    }

    goToSimilarURI(q, tid) {
        return window.location.protocol + "//" + window.location.host + "/products/" + (q ? q.replaceAll('/', ' ') : '') + "?p=" + this.state.p + '&tid=' + (tid ? tid : '') + '&pid=' + (this.state.pid ? this.state.pid : '');
    }

    goToProductURI(id, name) {
        return window.location.protocol + "//" + window.location.host + "/preview/" + id + "/" + (name ? name.replaceAll('/', ' ') : '');
    }

    goToProduct(id, name) {
        window.history.pushState("", document.title, "/preview/" + id + "/" + (name ? name.replaceAll(' / ', ' ') : ''));
        this.props.openProductView();
    }

    getSimilar(productName, tid) {
        this.setState({ q: productName, tid: tid, pid: null, p: 1});
        this.search(productName, 1, tid, null);
    }

    buyProduct(refLink) {
        window.open(refLink, '_blank')?.focus();
    }

    search(q, p, tid, pid) {
        window.scrollTo(0, 0);
        document.title = 'Результаты поиска Купить: ' + ( q ? q : '');
        window.history.pushState("", document.title, '/products/' + (q ? q.replaceAll('/', ' ') : '') + '?p=' + p + '&tid=' + (tid ? tid : '') + '&pid=' + (pid ? pid : ''));

        SearchProducts(q, p, tid, pid )
            .then(products => this.setState({
                productsFound: products["foundCount"],
                products: products["products"].map((item, index) => (
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

    goToPage(p: number) {
        p = p >= 0 ? p : 0;
        this.setState({ p: p });
        this.search(this.state.q, p, this.state.tid, this.state.pid);
    }

    onChange(e) { this.setState({ q: e.target.value }); }

    render() {
        return (
            <Group><Search
                value={this.state.q}
                onChange={this.onChange}
                onKeyUp={this.searchEnter}
               // icon={<Icon24Filter />}
               // onIconClick={console.log}
            />
                <Header mode="primary">Товаров найдено: {this.state.productsFound}</Header>
                <CardGrid size={this.props.isDesktop ? 's' : 'l'}>

                    {
                        this.state.products
                    }

                </CardGrid>
                <Div style={{
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <a onClick={(e) => e.preventDefault()} href={this.goToPageURI(0)}><Button onClick={() => this.goToPage(0)} size="m" style={{ marginRight: 8 }}>Начало</Button></a>
                    <a onClick={(e) => e.preventDefault()} href={this.goToPageURI(this.state.p - 1)}><Button onClick={() => this.goToPage(this.state.p - 1)} size="m" style={{ marginRight: 8 }}>Назад</Button></a>
                    <a onClick={(e) => e.preventDefault()} href={this.goToPageURI(this.state.p + 1)}><Button onClick={() => this.goToPage(this.state.p + 1)} size="m" >Далее</Button></a>
                </Div>
            </Group>
        );
    }
}