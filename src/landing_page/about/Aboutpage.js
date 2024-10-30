import React from "react";
import { Users, Trophy, Building2, GraduationCap } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Alumni Network",
    },
    {
      icon: <Trophy className="w-8 h-8 " />,
      value: "50+",
      label: "Years of Excellence",
    },
    {
      icon: <Building2 className="w-8 h-8 text-center " />,
      value: "500+",
      label: "Partner Companies",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "25+",
      label: "Countries Represented",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            About Our Alumni Association
          </h1>
          <p className="text-xl text-blue-100">
            Connecting generations of excellence and fostering lifelong
            relationships
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div className=" mx-auto text-center">
          <h2 className=" font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We strive to create a vibrant, supportive community that connects
            alumni across generations, fostering professional growth, mentorship
            opportunities, and lasting friendships while advancing our
            institution's legacy of excellence.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Founded in 1973, our Alumni Association has grown from a small
              group of dedicated graduates to a global network of professionals
              spanning various industries and continents.
            </p>
            <p className="mb-4">
              Over the decades, we've established numerous programs and
              initiatives to support our alumni community, including mentorship
              programs, networking events, and professional development
              workshops.
            </p>
            <p>
              Today, we continue to build on this strong foundation, embracing
              new technologies and innovative ways to keep our community
              connected and engaged while honoring our rich traditions.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Community
              </h3>
              <p className="text-gray-600">
                Fostering meaningful connections and supporting each other's
                growth and success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Excellence
              </h3>
              <p className="text-gray-600">
                Maintaining high standards in all our endeavors and inspiring
                others to do the same.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Innovation
              </h3>
              <p className="text-gray-600">
                Embracing new ideas and approaches to better serve our growing
                alumni community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
