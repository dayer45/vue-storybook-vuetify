import AlCard from "./Card.vue";

export default {
  title: "Example/Card",
  component: AlCard,
  argTypes: {
    highlightTextColor: { control: "color", presetsColors: "#9e2ab3" },
    highlightBgColor: { control: "color", presetsColors: "#9e2ab3" },
    highlightBlurColor: { control: "color", presetsColors: "#ebc8ef" },
    display: {
      control: "object"
    },
    data: { control: "object" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AlCard },
  template: '<al-card v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  display: {
    title: "my card title",
    timeFomatter: (date) => {
      return date.toISOString().substring(0, 10).split("-").join(" ");
    },
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    webinarText: "John Doe",
    webText: "Go to there"
  },
  data: {
    id: "123",
    title: "Occurrence title",
    description: "Occurrence description",
    website: "https://www.alumnforce.com",
    webinarUrl: "https://www.alumnforce.com",
    begin_at: "2020-03-15 17:10:00",
    end_at: "2020-03-15 17:10:00",
    created: "2020-03-15 17:10:00",
    updated: "2020-03-15 17:10:00",
    cover: "https://picsum.photos/id/11/500/300",
    thumbnail: "/medias/image/thumbnail_27499552060c0d262d8601.jpg",
    _embedded: {
      address: {
        venue: "Exhibition center",
        address: "5 Rue Marguerite de Rochechouart",
        address_2: "",
        city: "Paris",
        zip: "75009",
        country_iso: "FR",
        latitude: "48.877013",
        longitude: "2.345189"
      },
      author: {
        id: "123",
        name: "John Doe",
        email: "john.doe@alumnforce.com",
        avatar: {
          user_id: "123",
          display_name: "John Smith III",
          profile_photo: "https://cdn-af.example.net/medias/profile/XXXXX.png",
          color: "#AB120F",
          initials: "JS",
          _links: {
            self: {
              href: "string"
            }
          }
        },
        _links: {
          self: {
            href: "string"
          }
        }
      },
      status: {
        id: 1,
        name: "occurrence_is_waiting_for_validation",
        label: "En attente de validation",
        _links: {
          self: {
            href: "string"
          }
        }
      },
      category: {
        id: "123",
        name: "{'en': 'Evenings'}"
      },
      groups: {
        id: "123",
        name: "Contractors",
        description: "Group for contractors users",
        _links: {
          self: {
            href: "string"
          }
        }
      }
    },
    is_on_site: true,
    is_webinar: true,
    seat_available: "5",
    replay_link: "https://redirect.com",
    web_url: "https://website.com/foo/bar",
    _links: {
      self: {
        href: "string"
      }
    }
  }
};
