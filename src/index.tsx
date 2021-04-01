import '@vkontakte/vkui/dist/vkui.css';

import * as React from 'react';
import { AppRoot, ConfigProvider, AdaptivityProvider, withAdaptivity, usePlatform, SplitLayout, SplitCol, Epic, Panel, Placeholder, View, Group, PanelHeader, Tabbar, TabbarItem, VKCOM, ViewWidth, Cell } from '@vkontakte/vkui';
import { Icon28ShoppingCartOutline, Icon28InfoCircleOutline, Icon28ServicesOutline, Icon28UserCircleOutline } from '@vkontakte/icons';
import ReactDOM from 'react-dom';
import { GetCurrentPage } from './store/API';
import Partners from './components/Partners';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductPreview from './components/ProductPreview';
import About from './components/About';

const Example = withAdaptivity(({ viewWidth }) => {
    const platform = usePlatform();
    const currentPage = GetCurrentPage();
    const [activeStory, setActiveStory] = React.useState(currentPage);
    const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
    const openProductView = () => setActiveStory('productView');
    const openSearch = () => setActiveStory('products');
    const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
    const hasHeader = platform !== VKCOM;    

    return (
        <SplitLayout
            header={hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
        >
            {isDesktop && (
                <SplitCol fixed width="280px" maxWidth="280px">
                    <Panel>
                        {hasHeader && <PanelHeader />}
                        <Group>
                            <Cell
                                disabled={activeStory === 'partners'}
                                style={activeStory === 'partners' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="partners"
                                onClick={onStoryChange}
                                before={<Icon28UserCircleOutline />}
                            >
                                Партнёры
                            </Cell>
                            <Cell
                                disabled={activeStory === 'categories'}
                                style={activeStory === 'categories' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="categories"
                                onClick={onStoryChange}
                                before={<Icon28ServicesOutline />}
                            >
                                Категории
                            </Cell>
                            <Cell
                                disabled={activeStory === 'products'}
                                style={activeStory === 'products' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="products"
                                onClick={onStoryChange}
                                before={<Icon28ShoppingCartOutline />}
                            >
                                Товары
                            </Cell>
                            <Cell
                                disabled={activeStory === 'profile'}
                                style={activeStory === 'profile' ? {
                                    backgroundColor: "var(--button_secondary_background)",
                                    borderRadius: 8
                                } : {}}
                                data-story="profile"
                                onClick={onStoryChange}
                                before={<Icon28InfoCircleOutline />}
                            >
                                О нас
                            </Cell>
                        </Group>
                    </Panel>
                </SplitCol>
            )}

            <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '800px' : '100%'}
                maxWidth={isDesktop ? '800px' : '100%'}
            >
                <Epic activeStory={activeStory} tabbar={!isDesktop &&
                    <Tabbar>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'partners'}
                            data-story="partners"
                            text="Партнёры"
                        ><Icon28UserCircleOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'categories'}
                            data-story="categories"
                            text="Категории"
                        ><Icon28ServicesOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'products'}
                            data-story="products"
                            text="Товары"
                        ><Icon28ShoppingCartOutline /></TabbarItem>
                        <TabbarItem
                            onClick={onStoryChange}
                            selected={activeStory === 'profile'}
                            data-story="profile"
                            text="О нас"
                        ><Icon28InfoCircleOutline /></TabbarItem>
                    </Tabbar>
                }>
                    <View id="partners" activePanel="partners">
                        <Panel id="partners">
                            <PanelHeader>Партнёры</PanelHeader>
                            <Partners isDesktop={isDesktop} />
                        </Panel>
                    </View>
                    <View id="categories" activePanel="categories">
                        <Panel id="categories">
                            <PanelHeader>Категории</PanelHeader>
                            <Categories isDesktop={isDesktop} />
                        </Panel>
                    </View>
                    <View id="products" activePanel="products">
                        <Panel id="products">
                            <PanelHeader>Товары</PanelHeader>
                            <Products isDesktop={isDesktop} openProductView={openProductView} />
                        </Panel>
                    </View>
                    <View id="profile" activePanel="profile">
                        <Panel id="profile">
                            <PanelHeader>О нас</PanelHeader>
                            <About />
                        </Panel>
                    </View>
                    <View id="productView" activePanel="productView">
                        <Panel id="productView">
                            <PanelHeader>Купить товар</PanelHeader>
                            <ProductPreview openSearch={openSearch} isDesktop={isDesktop} />
                        </Panel>
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
}, {
    viewWidth: true
});



function App() {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <Example viewWidth={true} />
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));
