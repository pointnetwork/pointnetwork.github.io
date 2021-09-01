/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 const React = require("react");

 const Container = require("react-bootstrap/Container").default;
 const Row = require("react-bootstrap/Row").default;
 const Col = require("react-bootstrap/Col").default;
 const Layout = require('@theme/Layout').default;

 class HomeNav extends React.Component {
   render() {
     const NavContainer = (props) => (
       <section className="homeNavContainer">
         <Container className="h-200">
           <Row className="h-200 d-flex align-items-center">
             {props.children}
           </Row>
         </Container>
       </section>
     );

     const NavItem = (props) => (
       <Col xs={12} md={12} lg={3} className="homeNavItem rounded-lg">
         <a
           href={props.href}
           className="h-200 d-flex align-items-center"
           data-aos="fade-up"
           data-aos-delay={props.aosDelay}
         >
           <div className="mx-auto">
             <h2 className="display-4 mt-0 text-dark font-weight-bold text-center">
               {props.title}
             </h2>
             <p className="small text-secondary px-4">{props.content}</p>
           </div>
         </a>
       </Col>
     );

     return (
       <NavContainer>
        <NavItem
           href={this.props.docUrl("use-index")}
           title="Use"
           content="Information and guides for end users of Point Network."
           aosDelay="900"
         />
          <NavItem
           href={this.props.docUrl("learn-index")}
           content="Point Network is a sharded protocol that enables blockchain networks to operate together seamlessly."
           title="Learn"
           aosDelay="300"
         />
         <NavItem
           href={this.props.docUrl("build-index")}
           title="Build"
           content="Most up-to-date information on the status of the development tools in the Point Network ecosystem."
           aosDelay="0"
         />
         <NavItem
           href={this.props.docUrl("maintain-index")}
           title="Maintain"
           content="Information and guides on how to deploy a node and run the network."
           aosDelay="600"
         />
       </NavContainer>
     );
   }
 }

 class HomeFooter extends React.Component {
   render() {
     const FooterContainer = (props) => (
       <section className="homeFooterContainer text-white text-left">
         <Container>
           <Row className="pb-5">{props.children}</Row>
         </Container>
       </section>
     );

     const ImproveWiki = () => (
       <Col lg={6} className="d-flex align-items-end flex-column pb-5">
         <Col xs={12}>
           <span className="material-icons" style={{ fontSize: 50 + "px" }}>
             language
           </span>
           <h3 className="h2 font-weight-bold">Help improve this wiki</h3>
           <p className="mb-5">
             This wiki was started by and is maintained by Point Network. It is
             an open-source project and aims to be the most extensive
             resource of knowledge on Point Network and the Point Network ecosystem.
           </p>
         </Col>
         <Col>
           <a href={this.props.docUrl("contributing")}>
             <button className="btn btn-lg btn-primary btn-bg-primary mr-3">
               Contribute
             </button>
           </a>
           <a
             href={this.props.docUrl("contributing")}
             target="_blank"
             rel="noreferrer noopener"
           >
             <button className="btn btn-lg btn-primary btn-bg-primary">
               Help Translate
             </button>
           </a>
         </Col>
       </Col>
     );

     return (
       <FooterContainer>
         <ImproveWiki />
       </FooterContainer>
     );
   }
 }

 class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : "docs/"}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <Layout title={siteConfig.tagline}>
        <div className="homeContainer">
          <HomeNav siteConfig={siteConfig} docUrl={docUrl} />
          <HomeFooter siteConfig={siteConfig} docUrl={docUrl} />
        </div>
      </Layout>
    );
  }
}

 module.exports = Index;