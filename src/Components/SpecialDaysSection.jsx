import React from "react";

const SpecialDaysSection = () => {
  return (
    <section id="events" className="bg-[#faf3e0] py-[50px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="uppercase tracking-widest text-2xl text-center py-8 md:py-[50px]">
          host your event
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kids Birthday",
              blurb:
                "2 hours, up to 15 guests, 1 welcome activity, 1 make and take craft, 1 game, tea or lemonade for guests, tea tray that includes: mini sandwiches, scones, fruit, individual cakes",
              price: "$350",
            },
            {
              title: "Showers",
              blurb:
                "2 hours, up to 15 guests, invitations, 2 activities and/or games (prize for games included), favors, drinks (tea, lemonade, choice of hot tea), 2 savories, scones, 2 desserts",
              price: "$375",
            },
            {
              title: "Room Rentals",
              blurb:
                "up to 15 guests, each additional guest $15, 2 hour rental, custom menu with either heavy hors d'oeuvres or brunch selection",
              price: "$400",
            },
            {
              title: "Cake and Punch Wedding",
              blurb:
                "up to 25 guests, 2 hours, $150/additional hour, all 3 rooms, 1 room ceremony, 1 room heavy hors d'oeuvres and cake, 1 room dancing, includes: ceremony, bride and groom florals, 2 tier cake, punch, first dances",
              price: "$2,500",
            },
            {
              title: "Elopement",
              blurb:
                "up to 6 guests, $25 each additional guest, ceremony, bride and groom florals, reception, 2 tier cake, punch",
              price: "$600",
            },
          ].map(({ title, blurb, price }) => (
            <div
              key={title}
              className="rounded-lg shadow-md p-6 flex flex-col bg-[#d2ba9c]"
            >
              <h3 className="font-bold uppercase tracking-wide mb-2 text-[#faf3e0]">
                {title}
              </h3>
              <p className="text-sm text-slate-700 mb-4">{blurb}</p>
              <p className="text-sm text-slate-700 mb-4">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDaysSection;
