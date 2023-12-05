type Props = {
  size: number
}

const JPYBlack = ({ size }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.548-13.289h5.063v-2.288h-4.197L24.5 7.5h-3.647l-4.8 7.534L11.251 7.5H7.5l6.06 8.923H9.39v2.288h5.063v1.878H9.39v2.288h5.063V25.5h3.096v-2.623h5.063V20.59h-5.063z" fill-rule="evenodd" /></svg>
  )
}

export default JPYBlack