import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Aside from '../components/Aside';
import Column from '../components/Column';
import Content from '../components/Content';
import Footer from '../components/Footer';
import GitHub from '../components/GitHub';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Row from '../components/Row';
import Section from '../components/Section';

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <Header>
        <GitHub />
        <h1>HTML Style Guide</h1>
        <img src="/images/html5.svg" alt="HTML5 Logo" width="160" height="183" />
      </Header>

      <Content>
        <Main>
          <Section>
            <h2>HTML Style Guide</h2>
            <p>A style guide which helps you write better, performant, structured, scalable and maintainable HTML.</p>
          </Section>

          <Section id="anchor">
            <h2>Anchor</h2>

            <h3>External links</h3>
            <p>
              External links must have <code>rel="noopener"</code> and <code>target="_blank"</code> attribute.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;a href="path/to/external/file"&gt;External URL&lt;/a&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;a href="path/to/external/file" rel="noopener" target="_blank"&gt;External URL&lt;/a&gt;
                  </code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Title attribute</h3>
            <p>
              Anchor must have <code>title</code> attribute.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;a href="#"&gt;Link&lt;/a&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;a href="#" title="Description of anchor"&gt;Link&lt;/a&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="attribute">
            <h2>Attribute</h2>

            <h3>Attribute Case</h3>
            <p>Attribute must be written in lowercase.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;a HREF="#"&gt;&lt;/a&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;a href="#"&gt;&lt;/a&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Attribute Content</h3>
            <p>Attribute content must be written in lowercase.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;meta charset="UTF-8"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;meta charset="utf-8"&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Boolean attribute</h3>
            <p>
              Boolean attribute values like <code>checked</code>, <code>disabled</code> and <code>required</code> are
              redundant and must be ommitted.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;input type="text" required="required"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;input type="text" required&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Attribute value</h3>
            <p>Attribute value must be wrapped in quotation marks.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;input type=text&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;input type="text"&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Equal Sign</h3>
            <p>Spaces around attribute equal signs must be avoided.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;input type = "text"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;input type="text"&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="comment">
            <h2>Comment</h2>

            <h3>Comment marker</h3>
            <p>Single line comments must have space before and after comment markers.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;!--single line comment--&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;!-- single line comment --&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Single line comment</h3>
            <p>Single line comment must be placed before tag.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;body&gt; &lt;!-- Single line comment --&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;!-- Single line comment --&gt; &lt;body&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="document">
            <h2>Document</h2>

            <h3>Encoding</h3>
            <p>
              Document must have <code>utf-8</code> encoding.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;head&gt; &lt;title&gt;Website&lt;/title&gt; &lt;meta charset="Shift_JIS"&gt; &lt;/head&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;head&gt; &lt;meta charset="utf-8"&gt; &lt;title&gt;Website&lt;/title&gt; &lt;/head&gt;
                  </code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Character encoding</h3>
            <p>Character encoding must be within the first 1024 bytes of the document.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;head&gt; &lt;title&gt;Website&lt;/title&gt; … &lt;meta charset="utf-8"&gt; &lt;/head&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;head&gt; &lt;meta charset="utf-8"&gt; … &lt;title&gt;Website&lt;/title&gt; &lt;/head&gt;
                  </code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="form">
            <h2>Form</h2>

            <h3>Input type</h3>
            <p>Input type must be specified.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;input&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;input type="text"&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="headline">
            <h2>Headline</h2>

            <h3>Heading Hierarchy</h3>
            <p>Headlines must be places in hierarchical order.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;h2&gt;Subheadline&lt;/h2&gt; &lt;h1&gt;Headline&lt;/h1&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;h1&gt;Headline&lt;/h1&gt; &lt;h2&gt;Subheadline&lt;/h2&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="image">
            <h2>Image</h2>

            <h3>Alt attribute</h3>
            <p>
              Image must have <code>alt</code> attribute.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image" alt="Description of image"&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Dimensions</h3>
            <p>
              Image must have <code>width</code> and <code>height</code> attribute.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image" width="400" height="300"&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="link">
            <h2>Link</h2>

            <h3>Protocol</h3>
            <p>Links to external resources must have a protocol specified.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;link href="//path/to/file.css" rel="stylesheet"&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;link href="https://path/to/file.css" rel="stylesheet"&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="selector">
            <h2>Selector</h2>

            <h3>ID / Class</h3>
            <p>Element ID / Class must be written in lowercase seperated by dashes starting with letter.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;div id="Color" className="#bada55"&gt;…&lt;/div&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;div id="color" className="color-bada55"&gt;…&lt;/div&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="string">
            <h2>String</h2>

            <h3>Quotation Marks</h3>
            <p>Strings must be quoted using double quotes.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;a href='#'&gt;Link&lt;/a&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;a href="#"&gt;Link&lt;/a&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="tag">
            <h2>Tag</h2>

            <h3>Newline</h3>
            <p>Newline between tag name and content must be avoided.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam quas maxime harum,
                    sint nesciunt nihil, molestiae, quos soluta inventore rem nemo sit quidem dolorum, sunt magni eos
                    officia illum! &lt;/p&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam quas maxime harum,
                    sint nesciunt nihil, molestiae, quos soluta inventore rem nemo sit quidem dolorum, sunt magni eos
                    officia illum!&lt;/p&gt;
                  </code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Tag Case</h3>
            <p>Tags must be written in lowercase.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;HTML&gt;&lt;/HTML&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;html&gt;&lt;/html&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Empty</h3>
            <p>Tags must not be empty.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;a href="#"&gt;&lt;/a&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;a href="#"&gt;Home&lt;/a&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Self-closing</h3>
            <p>Trailing slash in self-closing tag must be ommitted.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image" /&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;img src="path/to/image"&gt;</code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Closing tags</h3>
            <p>
              Optional closing tags like <code>&lt;/body&gt;</code>, <code>&lt;/li&gt;</code>, <code>&lt;/p&gt;</code>,
              <code>&lt;/td&gt;</code> or <code>&lt;/th&gt;</code> must not be ommitted.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;html&gt; &lt;body&gt; &lt;ul&gt; &lt;li&gt;List Item 1 &lt;li&gt;List Item 2 &lt;li&gt;List Item
                    3 &lt;/ul&gt; &lt;/html&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;html&gt; &lt;body&gt; &lt;ul&gt; &lt;li&gt;List Item 1&lt;/li&gt; &lt;li&gt;List Item
                    2&lt;/li&gt; &lt;li&gt;List Item 3&lt;/li&gt; &lt;/ul&gt; &lt;/body&gt; &lt;/html&gt;
                  </code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="general">
            <h2>General</h2>

            <h3>Indentation</h3>
            <p>Tags must be indented using two spaces.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;html&gt; &#09;&lt;body&gt;…&lt;/body&gt; &lt;/html&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;html&gt; &lt;body&gt;…&lt;/body&gt; &lt;/html&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="css">
            <h2>CSS</h2>

            <h3>Inline Styles</h3>
            <p>Inline styles must be avoided.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;button style="background-color: #2980b9; color: #fff; display: inline-block; padding: 0.25em
                    1em;"&gt;Button&lt;/button&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                {/* <pre><code className="html">&lt;style&gt;
.button {
    background-color: #2980b9;
    color: #fff;
    display: inline-block;
    padding: 0.25em 1em;
  }
&lt;/style&gt;

&lt;button className="button"&gt;Button&lt;/button&gt;</code></pre> */}
              </Column>
            </Row>

            <hr />

            <h3>Type</h3>
            <p>
              Style <code>type="text/css"</code> attribute must be ommitted
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;style type="text/css"&gt;&lt;/style&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;style&gt;&lt;/style&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="javascript">
            <h2>JavaScript</h2>

            <h3>External files</h3>
            <p>
              External JavaScript files must be loaded before closing <code>&lt;/body&gt;</code> tag.
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">
                    &lt;html&gt; &lt;head&gt; &lt;script src="path/to/file.js"&gt;&lt;/script&gt; &lt;/head&gt;
                    &lt;body&gt;&lt;/body&gt; &lt;/html&gt;
                  </code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;html&gt; &lt;head&gt;&lt;/head&gt; &lt;body&gt; &lt;script
                    src="path/to/file.js"&gt;&lt;/script&gt; &lt;/body&gt; &lt;/html&gt;
                  </code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Event Handlers</h3>
            <p>Inline event handlers must be avoided.</p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;button onclick="foo()"&gt;Button&lt;/button&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">
                    &lt;button className="js-button"&gt;Button&lt;/button&gt; &lt;script&gt;
                    document.querySelector('.js-button').addEventListener('click', foo); &lt;/script&gt;
                  </code>
                </pre>
              </Column>
            </Row>

            <hr />

            <h3>Type</h3>
            <p>
              Script <code>type="text/javascript"</code> attribute must be ommitted
            </p>

            <Row>
              <Column>
                <h4>Bad</h4>
                <pre>
                  <code className="html">&lt;script type="text/javascript"&gt;&lt;/script&gt;</code>
                </pre>
              </Column>

              <Column>
                <h4>Good</h4>
                <pre>
                  <code className="html">&lt;script&gt;&lt;/script&gt;</code>
                </pre>
              </Column>
            </Row>
          </Section>

          <Section id="tools">
            <h2>Tools</h2>

            <ul>
              <li>
                <a href="https://validator.w3.org/" target="_blank" rel="noopener">
                  w3 Validator
                </a>
              </li>
            </ul>
          </Section>

          <Section id="resources">
            <h2>Resources</h2>

            <ul>
              <li>
                <a href="http://codeguide.co/" target="_blank" rel="noopener">
                  CodeGuide
                </a>
              </li>
              <li>
                <a href="https://google.github.io/styleguide/htmlcssguide.html" target="_blank" rel="noopener">
                  Google HTML & CSS Guide
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html5_syntax.asp" target="_blank" rel="noopener">
                  w3school
                </a>
              </li>
              <li>
                <a href="https://github.com/hail2u/html-best-practices" target="_blank" rel="noopener">
                  HTML Best Practices
                </a>
              </li>
            </ul>
          </Section>
        </Main>

        <Aside>
          <Navigation />
        </Aside>
      </Content>

      <Footer>
        <Grid>
          <p>
            <a href="https://github.com/marcobiedermann/html-style-guide" target="_blank" rel="noopener">
              GitHub
            </a>
          </p>
        </Grid>
      </Footer>
    </>
  );
};

export default IndexPage;
