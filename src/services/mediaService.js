/**
 * Service de gestion des médias (images & vidéos)
 * Découple les composants de la persistance locale et prépare l'intégration d'un backend distant.
 */

const STORAGE_KEY = 'foxtrott_custom_images';

export const mediaService = {
  /**
   * Récupère toutes les images personnalisées
   */
  getAllCustomImages() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn('Erreur lecture mediaService localStorage:', e);
      return {};
    }
  },

  /**
   * Obtient l'URL d'image active pour un projet donné
   */
  getProjectImage(project) {
    if (!project) return '/images/projects/sauron.png';
    const customMap = this.getAllCustomImages();
    if (customMap[project.id]) {
      return customMap[project.id];
    }
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images[0];
    }
    return project.image || '/images/projects/sauron.png';
  },

  /**
   * Enregistre une image personnalisée pour un projet
   */
  saveCustomImage(projectId, dataUrl) {
    try {
      const current = this.getAllCustomImages();
      current[projectId] = dataUrl;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      return true;
    } catch (e) {
      console.warn('Erreur sauvegarde mediaService localStorage:', e);
      return false;
    }
  },

  /**
   * Supprime l'image personnalisée pour restaurer l'originale
   */
  resetCustomImage(projectId) {
    try {
      const current = this.getAllCustomImages();
      delete current[projectId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      return true;
    } catch (e) {
      console.warn('Erreur reset mediaService localStorage:', e);
      return false;
    }
  }
};
