import LanguageInterface from './LanguageInterface';

export const vn: LanguageInterface = {
  // General
  done: 'Hoàn thành',
  cancel: 'Hủy',
  home: 'Trang chủ',
  search: 'Tìm kiếm',
  bookmark: 'Đánh dấu',
  profile: 'Hồ sơ',
  view_all: 'Xem tất cả',
  currently_reading: 'Đang đọc',
  favourite_list: 'Yêu thích',
  reviews: (score: number, scoredBy: number) =>
    `${score.toFixed(1)} / ${scoredBy} đánh giá`,
  settings: 'Cài đặt',

  // Onboarding
  onboarding_title_part1: 'Tìm kiếm',
  onboarding_title_part2: 'Cuốn sách tuyệt vời tiếp theo của bạn',
  onboarding_start: 'Bắt đầu',

  // Home
  greeting: 'Xin chào, bộ manga nào phù hợp với tâm trạng hiện tại của bạn?',
  home_unfinished_manga: (date: string) =>
    `Nhớ rằng, bạn còn một bộ manga chưa hoàn thành từ ${date}`,

  // Search
  search_place_holder: 'Tìm kiếm manga, nhân vật hoặc tác giả',
  search_recent: 'Gần đây',
  search_clear_recent: 'Xóa tất cả',
  genre_most_popular: 'Phổ biến nhất',

  // Bookmark
  recently_read: 'Đã đọc gần đây',
  favourite_authors: 'Tác giả yêu thích',

  // Profile
  reading_finished: 'Đã hoàn thành',
  theme: 'Chủ đề',
  light_theme: 'Chủ đề sáng',
  dark_theme: 'Chủ đề tối',
  language: 'Ngôn ngữ',
  en: 'Tiếng Anh',
  vn: 'Tiếng việt',
  clear_all_data: 'Xóa tất cả dữ liệu',

  // Author Detail
  author_bio: 'Tiểu sử',
  author_works: 'Tác phẩm',

  // Manga Detail
  manga_ranked: (rank: number) => `Xếp hạng #${rank}`,
  manga_popularity: (rank: number) => `Độ phổ biến #${rank}`,
  manga_members: (rank: number) => `Thành viên #${rank}`,
  manga_synopsis: 'Tóm tắt',
  characters: 'Nhân vật',
  manga_my_reading_status: 'Tình trạng đọc của tôi:',
  manga_start_reading: 'Bắt đầu đọc',
  manga_finish_reading: 'Hoàn thành',
  manga_finished_reading: (date: string) => `Hoàn thành vào ${date}`,

  // Character Detail
  character_appearances: 'Xuất hiện',

  // Category
  top_mangas: 'Top Manga',

  // Modals
  chapter_select_title: 'Chọn Chương',
  chapter_select_description: 'Chọn chương cuối cùng bạn đã đọc:',
  chapter_name_with_num: (chapter: number) => `Chương: ${chapter}`,
  theme_select_title: 'Giao diện',
  theme_select_description:
    'Chọn chủ đề sẽ được áp dụng trên toàn ứng dụng.',
  language_select_description:
    'Chọn ngôn ngữ sẽ được áp dụng trên toàn ứng dụng.',
  system_default: 'Mặc định hệ thống',
  delete_data_warn_title: 'Xóa Tất Cả Dữ Liệu',
  delete_data_warn_description:
    'Bạn có chắc chắn muốn xóa tất cả dữ liệu của mình không?',
};
