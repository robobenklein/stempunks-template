<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.stempunk
 *
 * @copyright   Copyright (C) Ben Klein
 * @license     GNU General Public License version 3 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// Create a shortcut for params.
$params = $displayData->params;
$canEdit = $displayData->params->get('access-edit');
JHtml::addIncludePath(JPATH_COMPONENT.'/helpers/html');
JHtml::_('behavior.framework');
?>

  <?php if ($params->get('show_title') || $displayData->state == 0 || ($params->get('show_author') && !empty($displayData->author ))) : ?>

    <div id="home" class="section clear">
    <div class="wrapper">
    <div class="row">
    <div class="col-md-2 col-sm-2 col-xs-12"></div>
    <div class="col-md-8 col-sm-8 col-xs-12">

      <?php if ($params->get('show_title')) : ?>
        <h1 class="welcome">
          <?php if ($params->get('link_titles') && $params->get('access-view')) : ?>
            <a href="<?php echo JRoute::_(ContentHelperRoute::getArticleRoute($displayData->slug, $displayData->catid)); ?>">
            <?php echo $this->escape($displayData->title); ?>
            </a>
          <?php else : ?>
            <?php echo $this->escape($displayData->title); ?>
          <?php endif; ?>
        </h1>
      <?php endif; ?>

      <?php if ($displayData->state == 0) : ?>
              <span class="label label-warning"><?php echo JText::_('JUNPUBLISHED'); ?></span>
      <?php endif; ?>

    </div>
    <div class="col-md-2 col-sm-2 col-xs-12"></div>
    </div>
    </div>
    </div>

  <?php endif; ?>
