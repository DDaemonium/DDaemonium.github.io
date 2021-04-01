import { Card, CardGrid, Group, InfoRow, SimpleCell, Spinner } from "@vkontakte/vkui";
import * as React from 'react';
import { GetPartners } from "../store/API";

interface IProps {
    isDesktop: boolean,
}

export default class Partners extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        window.history.pushState("", "Partner Shop - партнёры", '/partners');
        document.title = "Partner Shop - партнёры";
        this.state = {
            partners: []
        };

        this.openPartners = this.openPartners.bind(this);
        this.openPartners();
    }

    openPartners() {
        GetPartners().then((x: any[]) => this.setState({
            partners: x.map(item => (
                <Card key={item["_id"]} mode="shadow" >
                    <SimpleCell>
                        <InfoRow header={"Товаров найдено: " + item["productsCount"]} >
                            {item["name"]}
                        </InfoRow>
                    </SimpleCell>
                </Card>
            ))
        }));
    }

    render() {
        return (
            <Group>
                {(!this.state.partners || this.state.partners.length <= 0) &&
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Spinner size="large" style={{ margin: '20px 0' }} />
                    </div>
                }
            <CardGrid size={this.props.isDesktop ? 's' : 'l'} >
                {
                    this.state.partners
                }
                </CardGrid>
            </Group>
        );
    }
}