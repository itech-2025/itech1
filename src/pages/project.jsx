import SectionsHeader from '../component/sectionsHeader'
import image from "../assets/img/pro (2).jpg"
import { useTranslation } from 'react-i18next'
const Project = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionsHeader
          name={t("project_title")}
          description={t("project")}
          image={image}
          namestyle='text-white'
      />
    </>
  )
}

export default Project