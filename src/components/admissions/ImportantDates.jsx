import { motion } from "framer-motion";
import { HiCalendar } from "react-icons/hi";

const dates = [
  {
    label: "Application Start Date",
    value: "January 2026",
    desc: "Forms available online and at school office",
  },
  {
    label: "Entrance Test Date",
    value: "February – March 2026",
    desc: "Test will be conducted as per allotted slot",
  },
  {
    label: "Result Announcement",
    value: "Within 2 weeks of test",
    desc: "Parents will receive communication via email / phone",
  },
  {
    label: "Academic Year Start Date",
    value: "June 2026",
    desc: "New academic session begins",
  },
];

export default function ImportantDates() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8fbff] to-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Important Dates
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Stay informed about key admission milestones for the upcoming
            academic year.
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-gold)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* vertical line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)]"></div>

          <div className="space-y-10">

            {dates.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6"
              >

                {/* circle icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-lg">
                  <HiCalendar className="h-6 w-6" />
                </div>

                {/* content card */}
                <div className="group w-full rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <h3 className="text-lg font-semibold text-gradient">
                        {item.label}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.desc}
                      </p>
                    </div>

                    <span className="inline-block rounded-full bg-[color:color-mix(in_srgb,var(--color-accent)_12%,white)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                      {item.value}
                    </span>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}