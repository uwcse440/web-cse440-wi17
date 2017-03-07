---
layout: base/bar/bar-sidebar-right
title: Projects
---

<div class="sidebar_start"></div>

<div class="row">
<div class="col-md-12" markdown="block">
<div class="panel panel-default" style="margin-top:20px;">
<div class="panel-heading" markdown="block">
## Poster Session
</div>
<div class="panel-body" markdown="block">
Please join us for a poster session celebrating the outstanding design work of CSE 440 students:
{% comment %}
Thank you for joining us to celebrate the outstanding design work of CSE 440 students:
{% endcomment %}

Monday, March 13

11:00 am to 12:00pm, [CSE Atrium](http://www.washington.edu/maps/#!/cse)

<img src="{{ site.baseurl }}/images/poster_session.jpg" width="100%" alt="Poster Session"/>
</div>
</div>
</div>
</div>

<div class="sidebar_end"></div>

# Project Theme

People have long sought to better understand themselves, but recently technology advances enable new approaches.
Projects explored opportunities and challenges in self-tracking, also known as personal informatics:

> Personal informatics systems are systems that help people collect personally relevant information for the purpose of 
> self-reflection and gaining self-knowledge.
>
> [Li _et al._, 2010]({{ site.baseurl }}/readings/PersonalInformatics-Li2010.pdf).

Self-tracking and personal informatics are closely related to the [Quantified Self](http://quantifiedself.com/) movement, which emphasizes:

> Self-knowledge through numbers.
>
> [Gary Wolf, 2009](http://archive.wired.com/medtech/health/magazine/17-07/lbnp_knowthyself)

As a focus for Winter 2017, students were asked to explore __tracking beyond the self__.
Instead of limiting self-tracking to a isolated self-analyst,
we asked students to consider how people might interact around personal data in a variety of social contexts.
Any problem where multiple people collect data, or where multiple people engage in gaining value from data,
introduces additional opportunities and challenges in designing for effective interaction with personal data.
Students have examined the problems people encounter,
then explored how new technology can go beyond the data fetish to help people in reaching their goals.

# Project Websites

{% assign projects_count = site.data.projects.projects | size %}
{% assign projects_rows = projects_count | divided_by: 4 | plus: 1 %}

{% if projects_count == 0 %}
Will be linked here as course projects are proposed and developed.
{% endif %}

<div class="row">
  {% for item_project in site.data.projects.projects %}
    <div class="col-sm-3 col-xs-6">        
      <p>
        {% if item_project.publishlink %}
        <a href="{{ site.baseurl }}/projects/{{ item_project.path }}/" target="_blank">
          {{ item_project.name }}
        </a>
        {% else %}
          {{ item_project.name }}
        {% endif %}
      </p>
      <div class="thumbnailBox">
        {% if item_project.publishlink %}
        <a href="{{ site.baseurl }}/projects/{{ item_project.path }}/" target="_blank">
          <img src="{{ site.baseurl }}/projects/{{ item_project.path }}/project_thumb.png" width="150" class="projectThumbnail" alt="{{ item_project.name }}"/>
        </a>
        {% else %}
          <img src="{{ site.baseurl }}/projects/{{ item_project.path }}/project_thumb.png" width="150" class="projectThumbnail" alt="{{ item_project.name }}"/>
        {% endif %}
      </div>
      {% assign row_current = forloop.index | minus: 1 | divided_by: 4 | plus: 1 %}
      {% unless row_current == projects_rows %}
        <p>&nbsp;</p>
      {% endunless %}
    </div>
  {% endfor %}
</div>
