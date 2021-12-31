const EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 60,
  sheetRows: 60,
  native: false,
  forceSize: false,
  tooltip: false,
  spriteSheetFn: (set, sheetSize) => ({
    uri: `https://unpkg.com/emoji-datasource-${set}@${EMOJI_DATASOURCE_VERSION}/img/${set}/sheets-256/${sheetSize}.png`,
  }),
  emojiImageFn: (image) => image,
  onPress: () => {},
  onLongPress: () => {},
  useLocalImages: false,
  margin: 14,
  noMargin: false,
}

const PickerDefaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  onSelect: () => {},
  onPressClose: () => {},
  onSkinChange: () => {},
  emojiSize: 30,
  emojiMargin: EmojiDefaultProps.margin,
  anchorSize: 24,
  perLine: 7,
  rows: 3,
  pagesToEagerLoad: 2,
  i18n: {},
  style: {},
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  theme: 'light',
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  sheetSize: EmojiDefaultProps.sheetSize,
  sheetColumns: EmojiDefaultProps.sheetColumns,
  sheetRows: EmojiDefaultProps.sheetRows,
  spriteSheetFn: EmojiDefaultProps.spriteSheetFn,
  emojiImageFn: EmojiDefaultProps.emojiImageFn,
  emojisToShowFilter: null,
  useLocalImages: EmojiDefaultProps.useLocalImages,
  showSkinTones: true,
  showAnchors: true,
  showCloseButton: false,
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  enableFrequentEmojiSort: false,
  custom: [],
  skinEmoji: '',
  skinEmojiSize: 28,
  notFound: () => {},
  notFoundEmoji: 'sleuth_or_spy',
  categoryEmojis: {},
  fontSize: 15,
}

export {PickerDefaultProps, EmojiDefaultProps}
