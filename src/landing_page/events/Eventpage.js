import React from "react";

const events = [
  {
    id: 1,
    title: "Annual Alumni Meet",
    date: "December 15, 2024",
    location: "Main Auditorium, University Campus",
    description:
      "Reconnect with fellow alumni, meet current students, and relive campus memories at our annual alumni gathering.",
  },
  {
    id: 2,
    title: "Career Networking Event",
    date: "January 10, 2025",
    location: "City Hall Conference Center",
    description:
      "A networking event aimed at helping alumni build connections within the industry, hosted by the alumni association.",
  },
  {
    id: 3,
    title: "Guest Lecture Series",
    date: "March 23, 2025",
    location: "Online Event",
    description:
      "Join us for an insightful online lecture with a guest speaker, sharing insights on recent trends in tech and innovation.",
  },
  {
    id: 4,
    title: "Family Day Picnic",
    date: "April 5, 2025",
    location: "Greenfield Park",
    description:
      "Bring your family and enjoy a day of fun, games, and nostalgia at our annual alumni picnic. Activities for all ages!",
  },
  {
    id: 5,
    title: "Alumni Awards Night",
    date: "June 12, 2025",
    location: "University Banquet Hall",
    description:
      "Celebrate the achievements of alumni who have made an impact in their fields with awards and special recognitions.",
  },
  {
    id: 6,
    title: "Entrepreneurship Workshop",
    date: "July 20, 2025",
    location: "Innovation Hub",
    description:
      "Join successful alumni entrepreneurs for a day-long workshop on business planning, funding, and networking strategies.",
  },
  {
    id: 7,
    title: "Alumni Sports Tournament",
    date: "August 18, 2025",
    location: "Campus Sports Grounds",
    description:
      "Get active and join fellow alumni in a friendly sports competition, including soccer, basketball, and tennis matches.",
  },
  {
    id: 8,
    title: "Fall Alumni Retreat",
    date: "September 5-7, 2025",
    location: "Lakeside Resort",
    description:
      "A weekend getaway retreat for alumni to relax, reflect, and reconnect through workshops, nature walks, and social activities.",
  },
  {
    id: 9,
    title: "Volunteer Day",
    date: "October 10, 2025",
    location: "Local Community Center",
    description:
      "Give back to the community by volunteering with fellow alumni. Activities include community clean-up, mentoring, and more.",
  },
  {
    id: 10,
    title: "Virtual Book Club Meetup",
    date: "November 15, 2025",
    location: "Online",
    description:
      "Join alumni for a virtual discussion of the latest trending book. Connect with others over shared interests in literature.",
  },
  {
    id: 11,
    title: "Technology Panel Discussion",
    date: "November 25, 2025",
    location: "University Conference Hall",
    description:
      "Hear from alumni working in tech about industry trends, challenges, and the future of technology in an interactive panel.",
  },
  {
    id: 12,
    title: "Alumni Holiday Gala",
    date: "December 20, 2025",
    location: "City Event Center",
    description:
      "Celebrate the holiday season with fellow alumni at a festive gala. Enjoy dinner, dancing, and holiday entertainment.",
  },
  {
    id: 13,
    title: "Financial Planning Seminar",
    date: "February 8, 2025",
    location: "Downtown Financial Center",
    description:
      "An informative seminar led by alumni financial advisors on retirement planning, investments, and wealth management.",
  },
];

const EventPage = () => {
  return (
    <div
      className="text-center"
      style={{
        color: "pink",
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
        marginTop: "180px",
      }}
    >
      <header className="text-center ">
        <h1 className=" fs-1">Alumni Events</h1>
        <p className="mt-2" style={{ color: "black" }}>
          Stay updated and reconnect with your community at our upcoming events!
        </p>
      </header>

      <div className="container">
        {events.map((event) => (
          <div key={event.id} className=" rounded-lg p-6 ">
            <h2 className="mt-5 fs-2">{event.title}</h2>
            <p className="mb-2 text-muted" style={{ color: "black" }}>
              <span className="font-medium">Date:</span> {event.date}
            </p>
            <p className="mb-2 text-muted" style={{ color: "black" }}>
              <span className="font-medium">Location:</span> {event.location}
            </p>
            <p className="text-muted mb-3 " style={{ color: "black" }}>
              {event.description}
            </p>
            <a
              href="/"
              className="mb-5"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>Learn More</b>
              <i
                class="fa fa-long-arrow-right m-1"
                style={{ color: "red" }}
                aria-hidden="true"
              ></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
