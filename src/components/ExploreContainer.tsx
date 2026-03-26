import './ExploreContainer.css';
import { IonTabButton, IonIcon, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">Home</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
      <IonBreadcrumb href="#film">Film</IonBreadcrumb>
    </IonBreadcrumbs>
  );
};

export default ExploreContainer;
