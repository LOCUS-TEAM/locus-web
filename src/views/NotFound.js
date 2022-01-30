import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <>

      <MetaTags>
          <meta property="og:title" content="404 Not Found : Team Locus" />
          <meta name='title' content="404 Not Found : Team Locus" />
          <title>404 Not Found : Team Locus</title>
      </MetaTags>

      <section className="bg-gradient-to-b from-gray-100 to-white" style={{paddingTop: "100px", paddingBottom: "100px", textAlign: "center"}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                      <h1 style={{marginBottom: '10px'}}>404</h1>
                      <p style={{fontWeight: '600'}}>요청한 페이지가 존재하지 않습니다.</p>
                  </div>
                  <div className="max-w-sm mx-auto">
                      <div className="flex flex-wrap -mx-3 mt-6">
                          <div className="w-full px-3">
                              <Link to="/" className="button button-primary button-wide-mobile button-sm">
                                메인 페이지로 이동하기
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </>
  )

}

export default NotFound;