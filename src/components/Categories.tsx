import { Card, CardGrid, Group, InfoRow, SimpleCell, SubnavigationBar, SubnavigationButton } from "@vkontakte/vkui";
import * as React from 'react';
import { GetCategories, GetParentCategory } from "../store/API";

interface IProps {
    isDesktop: boolean,
}

export default class Categories extends React.Component<IProps, any>{
    constructor(props: IProps) {
        super(props);
        document.title = "Partner Shop - категории товаров";
        var pathArray = window.location.pathname.split('/');
        if (pathArray.length < 1 || pathArray[1] != "categories") {
            pathArray = [];
        }
        this.state = {
            categories: [],
            currentId: pathArray.length > 2 ? pathArray[2] : null,
            parentId: null
        };

        this.loadCategories = this.loadCategories.bind(this);

        this.loadCategories(this.state.currentId);
    }

    loadCategories(currentId) {
        GetCategories(currentId).then((x: any[]) => {
            if (x.length == 0) return;
            window.history.pushState("", document.title, "/categories/" + (currentId && currentId != "null" ? currentId : ''));
            document.querySelector("link[rel='canonical']")?.setAttribute("href", window.location.protocol + "//" + window.location.host + "/categories/" + (currentId && currentId != "null" ? currentId : ''));
            let parentId = x[0].parentId;
            if (parentId && parentId != "null") {
                GetParentCategory(parentId).then((z: any[]) => this.setState({ parentId: z[0].parentId }));
            }
            else {
                this.setState({ parentId: null});
            }
            
            this.setState({
                categories: x.map(item => (
                    <Card key={item["id"]} mode="shadow" onClick={_ => this.loadCategories(item["id"])} >
                        <SimpleCell>
                            <InfoRow header={"Подкатегории"} >
                                {item["name"]}
                            </InfoRow>
                        </SimpleCell>
                    </Card>
                ))
            });
        });
    }

    render() {
        return (
            <Group>
                <SubnavigationBar>
                    <SubnavigationButton
                        selected={false}
                        size="m"
                        onClick={_ => this.loadCategories(null)}
                    >
                        Все категории
                    </SubnavigationButton>
                        <SubnavigationButton
                            selected={false}
                            size="m"
                            onClick={_ => this.loadCategories(this.state.parentId)}
                        >
                            Назад
                    </SubnavigationButton>
                </SubnavigationBar>
                <CardGrid size={this.props.isDesktop ? 's' : 'l'} >
                    {
                        this.state.categories
                    }
                </CardGrid>
            </Group>
        );
    }
}