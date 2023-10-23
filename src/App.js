import React from "react";

import { Layout, Menu, Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import LineChartList from "./components/LineChartList";
import MultipleLineChartList from "./components/MultipleLineChartList";

const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={"300"}
          style={{
            overflow: "auto",
            height: "100vh",

            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>Incident Rate Monitoring</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>Chemical Management</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>Monthly Report</span>
            </Menu.Item>
            <Menu.Item key="4">
              <UploadOutlined />
              <span>Monthly Report</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 10,
              minHeight: "750px"
            }}
          >
            <div>
              <Row gutter={[16, 8]}>
                <Col span={8}>
                  <LineChartList />
                </Col>
                <Col span={8}>
                  <MultipleLineChartList />
                </Col>
                <Col span={8}>
                  <LineChartList />
                </Col>
              </Row>
            </div>
            ,
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
